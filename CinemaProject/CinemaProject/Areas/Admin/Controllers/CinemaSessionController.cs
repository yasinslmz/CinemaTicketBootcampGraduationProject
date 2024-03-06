using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CinemaProject.Data;
using CinemaProject.Models;

namespace CinemaProject.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CinemaSessionController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CinemaSessionController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Admin/CinemaSession
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.CinemaSession
                .Include(c => c.CinemaSalon)
                .Include(c => c.CinemaSalon.Cinema)
                .Include(c => c.MovieSpecified)
                .Include(c => c.MovieSpecified.Movie) 
                .ToListAsync();

            return View(await applicationDbContext);
        }
        public async Task<IActionResult> AddSession()
        {
            // Şehirleri SelectList'e dönüştür
            var cities = new SelectList(_context.City, "CityId", "Name");
           
            // ViewBag aracılığıyla ViewData'ya ekleyebilirsiniz
            ViewBag.Cities = cities;

            return View();
        }
        public async Task<IActionResult> PickCinema(int cityId)
        {
            // Şehirleri SelectList'e dönüştür
            var cinemas = new SelectList(_context.Cinema.Where(c=>c.CityId==cityId), "Id", "Name");

            // ViewBag aracılığıyla ViewData'ya ekleyebilirsiniz
            ViewBag.Cinemas = cinemas;

            return View();
        }

        [HttpGet]
        public IActionResult Create(int Id)
        {
            
            var cinemaSalonOptions = new SelectList(_context.CinemaSalon.Where(c=>c.CinemaId==Id), "Id", "Name");
            var movieOptions = new SelectList(_context.MovieSpecified.Include(ms => ms.Movie), "Id", "Movie.Name");

            var model = new CinemaSession
            {
                MovieOptions = movieOptions,
                CinemaSalonOptions= cinemaSalonOptions
            };

            return View(model);
        }

        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public  IActionResult Create(CinemaSession cinemaSession)
        {
            if (ModelState.IsValid && cinemaSession.IsValid==false)
            {
                _context.Add(cinemaSession);
                 _context.SaveChanges();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CinemaSalonId"] = new SelectList(_context.CinemaSalon, "Id", "Id", cinemaSession.CinemaSalonId);
            ViewData["MovieSpecifiedId"] = new SelectList(_context.MovieSpecified, "Id", "Id", cinemaSession.MovieSpecifiedId);

            // Ek bir hata mesajı ekleyebilir veya modelin IsValid özelliğini kontrol edebilirsiniz.
            if (!cinemaSession.IsValid==false)
            {
                ModelState.AddModelError(string.Empty, "Geçersiz seans zamanı o saatte başka bir film mevcut");
            }
            return View(cinemaSession);
        }


        private bool CinemaSessionExists(int id)
        {
          return (_context.CinemaSession?.Any(e => e.Id == id)).GetValueOrDefault();
        }




    }
}
