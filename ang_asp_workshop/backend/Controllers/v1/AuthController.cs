using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using backend.Services;
// using backend.Models;
using Microsoft.AspNetCore.Mvc;
//using v1.Models;

namespace backend.Controller.v1
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost("[action]")]
        public IActionResult Register([FromBody] User user)
        {
            _authRepository.Register(user);
            return Ok(new { result = "ok", message = "Register succcessfully" });
        }
    }
}