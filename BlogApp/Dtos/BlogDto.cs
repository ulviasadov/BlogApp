using System.ComponentModel.DataAnnotations;

namespace BlogApp.Dtos
{
    public class BlogDto
    {
        [Required]
        public required string UserName { get; set; }

        [Required]
        public required string ImageUrl { get; set; }

        [Required]
        public required string Title { get; set; }

        [Required]
        public required string BodyText { get; set; }
    }
}
