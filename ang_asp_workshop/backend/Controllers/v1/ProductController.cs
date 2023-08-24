using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
//using Controllers.Models;

namespace backend.Controller.v1
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpPost]
        public IActionResult AddProduct([FromForm] Product product, IFormFile file)
        {
            _productRepository.AddProduct(product, file);
            return Ok();
        }


        [HttpPut]
        public IActionResult EditProduct([FromForm] Product product, IFormFile file)
        {
            try
            {
                var result = _productRepository.GetProduct((int)product.ProductId!);
                if (result == null)
                {
                    return NotFound(new { message = "Product not found" });
                }

                result.Name = product.Name;
                result.Stock = product.Stock;
                result.Price = product.Price;

                _productRepository.EditProduct(result, file);
                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, new { message = e });
            }

        }



        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var result = _productRepository.GetProduct(id);
            return Ok(result);
        }



        [HttpGet]
        public IActionResult GetProducts()
        {
            try
            {
                Console.WriteLine("There is query");
                var result = _productRepository.LoadProducts();
                return Ok(result);
            }
            catch (Exception error)
            {

                return StatusCode(500, new { message = error });
            }
        }

    }
}