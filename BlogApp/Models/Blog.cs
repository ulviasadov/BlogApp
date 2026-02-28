using System.ComponentModel.DataAnnotations;

namespace BlogApp.Models
{
    public class Blog
    {
        public Guid Id { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Title { get; set; }

        [Required]
        [MaxLength(300)]
        public required string BodyText { get; set; }

        [Required]
        public required string UserId { get; set; }
        public User? User { get; set; }
    }
}
