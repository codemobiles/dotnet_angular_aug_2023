using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
//using v1.Models;

namespace backend.Controller.v1
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AuthController : ControllerBase
    {
        public AuthController()
        {
        }

        [HttpPost("[action]")]
        public IActionResult Register([FromBody] User user)
        {
            return Ok(new { result = "nok", message = "Register failed" });
        }
    }
}