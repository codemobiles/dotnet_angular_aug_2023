using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using backend.Services;
using backend.ViewModels;
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

        [HttpPost("[action]")]
        public IActionResult Login([FromBody] LoginViewModel loginViewModel)
        {
            try
            {
                

                (User? result, string token) = _authRepository.Login(user);

                if (result == null)
                {
                    return Unauthorized(new { token = "", message = "username invalid" });
                }

                if (String.IsNullOrEmpty(token))
                {
                    return Unauthorized(new { token = "", message = "password invalid" });
                }

                return Ok(new { token = token, message = "login successfully" });
            }
            catch (Exception error)
            {
                return StatusCode(500, new { message = error });
            }
        }

    }
}