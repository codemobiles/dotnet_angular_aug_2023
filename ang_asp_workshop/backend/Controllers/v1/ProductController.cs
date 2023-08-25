using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//using Controllers.Models;

namespace backend.Controller.v1
{

    // curl -X 'GET'  'https://localhost:8081/api/v1/Product'  -H 'accept: */*' -H 'Authorization: Bearer <token>'

    [Authorize]
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<AuthController> _logger;

        public ProductController(IProductRepository productRepository, ILogger<AuthController> logger
)
        {
            _logger = logger;
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

        ///..../search/name?keyword=1234
        [HttpGet("search/name/")]
        public IActionResult SearchProduct([FromQuery] string keyword)
        {
            try
            {
                var result = _productRepository.SearchProduct(keyword);
                return Ok(result);
            }
            catch (Exception error)
            {
                return StatusCode(500, new { message = error });
            }
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var product = _productRepository.GetProduct(id);
                if (product == null)
                {
                    return NotFound(new { message = "Product not found" });
                }
                _productRepository.DeleteProduct(product);
                return NoContent();
            }
            catch (Exception error)
            {
                return StatusCode(500, new { message = error });
            }
        }


        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            _logger.LogInformation("There is product query");
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