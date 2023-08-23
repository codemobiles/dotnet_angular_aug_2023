using System.ComponentModel.DataAnnotations;

namespace backend.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [MinLength(3, ErrorMessage = "passwords must have at least 3 characters")]
        public string Password { get; set; }
    }
}