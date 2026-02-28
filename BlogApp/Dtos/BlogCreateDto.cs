using System.ComponentModel.DataAnnotations;

namespace BlogApp.Dtos
{
    public class BlogCreateDto
    {
        [Required]
        [MaxLength(100)]
        public required string Title { get; set; }

        [Required]
        [MaxLength(300)]
        public required string BodyText { get; set; }
    }
}
