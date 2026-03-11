using BlogApp.Data;
using BlogApp.Dtos;
using BlogApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace BlogApp.Controllers.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public PostsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var posts = await _db.Blogs
                .Include(x => x.User)
                .OrderByDescending(x => x.Id)
                .Select(x => new BlogDto
                {
                    UserName = x.User!.UserName!,
                    ImageUrl = x.User.ImageUrl ?? "/images/default-avatar-profile-icon.jpg",
                    Title = x.Title!,
                    BodyText = x.BodyText!
                })
                .ToListAsync();

            return Ok(posts);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] BlogCreateDto model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId is null)
                return Unauthorized();

            var blog = new Blog
            {
                UserId = userId,
                Title = model.Title,
                BodyText = model.BodyText
            };

            _db.Blogs.Add(blog);
            await _db.SaveChangesAsync();

            return Ok(new { message = "Post created successfully" });
        }
    }
}