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
            var data = await _db.Blogs.Include(b => b.User).ToListAsync();

            if(data is null)
                return NotFound();

            return View(data);
        }
    }
}
