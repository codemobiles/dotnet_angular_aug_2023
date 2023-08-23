using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using backend.Database;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Services
{
    public class ProductRepository : IProductRepository
    {
        private readonly DatabaseContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment; // access to the current web host environment (wwwwroot path)

        public ProductRepository(DatabaseContext context, IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
            _context = context;
        }


        public IEnumerable<Product> LoadProducts()
        {
            return _context.Products.OrderByDescending(p => p.ProductId).ToList();
        }


        public Product GetProduct(int id)
        {
            return _context.Products.Find(id)!;
        }

        public void AddProduct(Product product, IFormFile image)
        {
            string fileName = UploadProductImage(image);

            if (!String.IsNullOrEmpty(fileName))
            {
                product.Image = fileName;
            }

            _context.Add(product);
            _context.SaveChanges();
        }

        public void EditProduct(Product product, IFormFile? image)
        {
            if (image != null)
            {
                string fileName = UploadProductImage(image);
                if (!String.IsNullOrEmpty(fileName))
                {
                    product.Image = fileName;
                }
            }

            _context.Entry(product).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteProduct(Product product)
        {
            _context.Remove(product);
            _context.SaveChanges();
        }

        public string UploadProductImage(IFormFile image)
        {
            string fileName = null;

            if (image != null && image.Length > 0)
            {
                string filePath = _webHostEnvironment.WebRootPath + "/images/";
                fileName = Guid.NewGuid().ToString() + System.IO.Path.GetExtension(image.FileName); // unique name
                string fullPath = filePath + fileName;
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    image.CopyTo(stream);
                    stream.Flush();
                }
            }
            return fileName;
        }

        public IEnumerable<Product> SearchProduct(string keyword)
        {
            return (from product in _context.Products
                    where EF.Functions.Like(product.Name, "%" + keyword + "%")
                    select product).ToList(); ;
        }

        public int CheckOutOfStock()
        {
            return _context.Products.Where(p => p.Stock == 0).Count();
        }

    }
}

