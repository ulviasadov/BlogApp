using Microsoft.AspNetCore.Identity;

namespace BlogApp.Models
{
    public class User : IdentityUser
    {
        public string? ImageUrl { get; set; }
    }
}
