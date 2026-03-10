using System.ComponentModel.DataAnnotations;

namespace BlogApp.Dtos
{
    public class UserCreateDto
    {
        public IFormFile? ImageFile { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        [EmailAddress]
        public required string Email { get; set; }

        [Required]
        public required string Password { get; set; }
    }
}
