using CinemaProject.Areas.Admin.Services.Interfaces;
using CinemaProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CinemaProject.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles =Other.Role_Admin)]
    public class UserController : Controller
    {
        IUserService userService;

        public UserController(IUserService userService) {
        
            this.userService = userService;
         }
        public async Task<IActionResult> Index()
        {
            var users= await userService.GetAllUserAsync();

            return View(users);
        }
    }
}
