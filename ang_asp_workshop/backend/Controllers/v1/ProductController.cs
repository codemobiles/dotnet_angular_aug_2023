using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using Controllers.Models;

namespace backend.Controller.v1
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public ProductController()
        {
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            try
            {
                var result = _productRepository.GetProducts();
                return Ok(result);
            }
            catch (Exception error)
            {

                return StatusCode(500, new { message = error });
            }
        }

    }
}