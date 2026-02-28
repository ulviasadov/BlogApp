using System.ComponentModel.DataAnnotations;

namespace BlogApp.Dtos
{
    public class UserSignInDto
    {
        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Password { get; set; }
    }
}
