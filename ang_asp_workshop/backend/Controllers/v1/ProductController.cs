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