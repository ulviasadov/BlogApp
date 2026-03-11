using BlogApp.Data;
using BlogApp.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlogApp.Controllers
{
    [Authorize]
    public class DiscoverController : Controller
    {
        private readonly AppDbContext _db;

        public DiscoverController(AppDbContext db)
        {
            _db = db;
        }

        public async Task<IActionResult> Index()
        {
            var data = await _db.Blogs
                .OrderByDescending(b => b.Id)
                .Select(b => new BlogDto
            {
                    Id = b.Id,
                UserName = b.User!.UserName!,
                ImageUrl = b.User!.ImageUrl != null
                    ? b.User.ImageUrl
                    : "/images/default-avatar-profile-icon.jpg",
                Title = b.Title!,
                BodyText = b.BodyText!
            })
                .ToListAsync();

            if(data is null)
                return NotFound();

            return View(data);
        }
    }
}
