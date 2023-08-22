using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimpleController : ControllerBase
    {
        public SimpleController()
        {
        }

        [HttpGet("")]
        public ActionResult<IEnumerable<string>> Getstrings()
        {
            return new List<string> { "React", "Angular", "VueJS" };
        }

        [HttpGet("result1")]
        public ActionResult<string> GetResult1()
        {
            return Ok("I am result1");
        }


        [HttpGet("{id}")]
        public ActionResult<string> GetstringById(int id)
        {
            return Ok($"Id is {id}");
        }

        [HttpGet("register/{username}/{password}")]
        public ActionResult<Object> Register(string username, string password)
        {
            return Ok(new { username = username, password = password });
        }

        [HttpGet("login/{username}/{password}")]
        public ActionResult<Object> Login(string username, string password, [FromQuery] string level)
        {
            return Ok(new { username = username, password = password, level = level });
        }


        [HttpPost("")]
        public ActionResult<string> Poststring(string model)
        {
            return null;
        }

        [HttpPut("{id}")]
        public IActionResult Putstring(int id, string model)
        {
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<string> DeletestringById(int id)
        {
            return null;
        }
    }
}