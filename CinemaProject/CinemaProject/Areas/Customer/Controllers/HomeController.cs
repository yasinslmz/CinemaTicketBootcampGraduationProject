using CinemaProject.Areas.Customer.Models;
using CinemaProject.Data;
using CinemaProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Net;
using System.Security.Claims;
using Iyzipay;
using Iyzipay.Model;
using Iyzipay.Request;
using Iyzipay.Model.V2.Subscription;
namespace CinemaProject.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        ApplicationDbContext db;

        public HomeController(ILogger<HomeController> logger,ApplicationDbContext db)
        {
            _logger = logger;
            this.db= db;
        }

        public IActionResult Index()
        {
            var movies = db.Movie.ToList();

            return View(movies);
        }
        [HttpGet]
        public IActionResult GetSalons(int cityId)
        {
            // cityId parametresini kullanarak şehire ait salon bilgilerini alın
            // Burada mock salon bilgileri kullanılmıştır. Gerçek veritabanı veya servis kullanımına uyarlayın.
            var salons = GetSalonsFromDatabase(cityId);

            // PartialView ile salon bilgilerini içeren bir view döndürün
            return PartialView("_SalonListPartial", salons);
        }

        // Bu metot, gerçek bir veritabanından şehre ait salon bilgilerini almak için kullanılabilir.
        private List<Cinema> GetSalonsFromDatabase(int cityId)
        {
           
            var salons = db.Cinema.Where(c=>c.CityId==cityId).ToList();
            if (salons.Any() )
            {
                return salons;
            }
            else
            {
                return new List<Cinema> ();
            }

            
        }
        [HttpGet]
        public IActionResult GetSalonsById(int cityId,int movieId)
        {
            // cityId parametresini kullanarak şehire ait salon bilgilerini alın
            // Burada mock salon bilgileri kullanılmıştır. Gerçek veritabanı veya servis kullanımına uyarlayın.
            var salons = GetSalonsByIdFromDatabase(cityId, movieId);

            // PartialView ile salon bilgilerini içeren bir view döndürün
            return PartialView("_SalonListPartial", salons);
        }

        // Bu metot, gerçek bir veritabanından şehre ait salon bilgilerini almak için kullanılabilir.
        private List<Cinema> GetSalonsByIdFromDatabase(int cityId, int movieId)
        {

            var cinemas = db.Cinema
             .Where(c => c.CityId == cityId && c.cinemaSalons
                 .Any(cs => cs.cinemaSessions
                     .Any(session => session.MovieSpecified.MovieId == movieId)))
             .ToList();



            if (cinemas.Any())
            {
                return cinemas;
            }
            else
            {
                return new List<Cinema>();
            }


        }

        [HttpGet]
        public IActionResult GetFilmTypes(int salonId)
        {
          
            var filmTypes = GetFilmTypesFromDatabase(salonId);

            return PartialView("_FilmTypePartial", filmTypes);
        }

        private List<string> GetFilmTypesFromDatabase(int salonId)
        {
            var filmTypes = db.CinemaSalon
                        .Where(c => c.CinemaId == salonId)
                        .Include(c => c.cinemaSessions)
                        .SelectMany(c => c.cinemaSessions.Select(cs => cs.MovieSpecified.Movie.MovieType))
                        .Distinct()
                        .ToList();

            if(filmTypes.Any())
            {
                return filmTypes;
            }
            return new List<string> ();
            
        }
        [HttpGet]
        public IActionResult GetFilmDates(string movieType,int salonId)
        {

            var filmDates = GetFilmDatesFromDatabase(movieType, salonId);

            return PartialView("_FilmDatePartial", filmDates);
        }

        private List<string> GetFilmDatesFromDatabase(string movieType, int salonId)
        {
            var filmDates = db.CinemaSalon
                            .Where(c => c.CinemaId == salonId)
                            .SelectMany(c => c.cinemaSessions
                                .Where(cs => cs.MovieSpecified.Movie.MovieType == movieType)
                                .Select(cs => cs.SessionTime != null ?
                                              cs.SessionTime.Value.Date.ToString("yyyy-MM-dd") : null))
                            .Distinct()
                            .ToList();

            return filmDates;
        }
        [HttpGet]
        public IActionResult GetFilmDateTimes(int salonId,int movieId )
        {

            var filmTimes = GetFilmTimesFromDatabase(salonId, movieId);

            return PartialView("_FilmTimePartial", filmTimes);
        }

        private List<FilmSession> GetFilmTimesFromDatabase(int salonId, int movieId)
        {
            var filmTimes = db.CinemaSalon
                            .Where(c => c.CinemaId == salonId)
                            .SelectMany(c => c.cinemaSessions
                                .Where(cs => cs.MovieSpecified.Movie.Id == movieId) // MovieId kontrolü ekledik
                                .Select(cs => new FilmSession
                                {
                                    SessionTime = cs.SessionTime,
                                    MovieSpecified = cs.MovieSpecified,
                                    CinemaSessionId=cs.Id

                                }))
                            .Distinct()
                            .ToList();

            return filmTimes;
        }
        
      

        [HttpGet]
        public IActionResult GetFilms(int cityId, string city, string cinemaName, string filmType, string cinemaDate)
        {
           
            if (ModelState.IsValid)
            {
               
                FilmRequest film = new FilmRequest()
                {
                    city = city,
                    cityId= cityId,
                    cinemaName = cinemaName,
                    filmType = filmType,
                    cinemaDate = cinemaDate
                };

                
                DateTime targetDate = DateTime.ParseExact(film.cinemaDate, "yyyy-MM-dd", CultureInfo.InvariantCulture);

                var movies = db.Cinema
                    .Where(c => c.Name == cinemaName)
                    .SelectMany(c => c.cinemaSalons
                        .SelectMany(cs => cs.cinemaSessions
                            .Where(ms => ms.SessionTime != null && ms.SessionTime.Value.Date == targetDate)
                            .Select(ms => ms.MovieSpecified.Movie)))
                    .Distinct()
                    .ToList();
                var validMovies = movies.Where(m => db.CinemaSession.Any(cs => cs.MovieSpecified.MovieId == m.Id && cs.SessionTime != null && cs.SessionTime.Value.Date == targetDate)).ToList();

                // Filmleri filtrele
                var filteredMovies = validMovies.Where(m => m.MovieType == filmType).ToList();

                // JSON'a çevir ve oturum değişkenine kaydet
                string moviesJson = JsonConvert.SerializeObject(filteredMovies);
                HttpContext.Session.SetString("MoviesList", moviesJson);

                // View'e dön
                return View("Index");
            }
            else
            {
                return BadRequest("Invalid model");
            }
        }
        
        public IActionResult DirectMovies(int cityId)
        {
            var moviesJson = HttpContext.Session.GetString("MoviesList");

            if (moviesJson != null)
            {
                List<Movie> movies = JsonConvert.DeserializeObject<List<Movie>>(moviesJson);
                MovieDirectVM movieDirectVM = new MovieDirectVM()
                {
                    movies = movies,
                    cityId=cityId
                };

                return View(movieDirectVM);
            }

            return View();

        }
        [HttpGet]
        public IActionResult MovieDetail(int movieId,int? cityId)
        {

            var movie=db.Movie.FirstOrDefault(m=>m.Id == movieId);
            ViewData["cityId"] = cityId;
            MovieDetailVM movieDetailVM = new MovieDetailVM() {
            Movie=movie,
            cityId=cityId
            };

            return View(movieDetailVM);
        }

        private IActionResult HandleCinemaSessionSeats(int sessionId)
        {
            var cinemaSession = db.CinemaSession.FirstOrDefault(cs => cs.Id == sessionId);
            var cinemaSalonId = cinemaSession.CinemaSalonId;
            var seats = db.Seat.Where(s => s.CinemaSalonId == cinemaSalonId).ToList();

            // Eğer koltuklar tanımlanmamışsa, 8x6 yani 48 koltuk ekleyin
            if (seats == null || seats.Count == 0)
            {
                for (char row = 'A'; row < 'I'; row++)
                {
                    for (int col = 1; col <= 6; col++)
                    {
                        var newSeat = new Seat
                        {
                            RowColumn = $"{row}{col}",
                            CinemaSalonId = cinemaSalonId.Value // .Value ile Nullable<int> değeri int'e dönüştürülebilir
                        };

                        db.Seat.Add(newSeat);
                    }
                }

                db.SaveChanges();

                // Yeniden koltukları çek
                seats = db.Seat.Where(s => s.CinemaSalonId == cinemaSalonId).ToList();
            }
            // Yeni koltukları ekleyin
            foreach (var seat in seats)
            {
                var newCinemaSessionSeat = new CinemaSessionSeat
                {
                    CinemaSessionId = sessionId,
                    SeatId = seat.Id,
                    IsOccupied = false // veya başka bir değer
                };

                db.CinemaSessionSeat.Add(newCinemaSessionSeat);
            }

           
            db.SaveChanges();

            return RedirectToAction("PickSeat", new { movieId = cinemaSession.MovieSpecifiedId, sessionId = sessionId });
        }
        [Authorize]
        [HttpPost]
        public IActionResult PickSeat(int movieId,int sessionId)
        {
            var film = db.Movie.FirstOrDefault(m => m.Id == movieId);

            // İlgili seansın koltuklarını al
            var cinemaSessionSeats = db.CinemaSessionSeat
                .Where(css => css.CinemaSessionId == sessionId)
                .Include(css => css.Seat)
                .ToList();

            // Eğer cinemaSessionSeats boşsa, yeni koltukları ekleyin ve işlemi tekrar çağırın
            if (cinemaSessionSeats.Count == 0)
            {
                return HandleCinemaSessionSeats(sessionId);
            }

            // Diğer işlemleri devam ettirin
            var cinema = db.Cinema
                .FirstOrDefault(c => c.cinemaSalons
                    .Any(cs => cs.cinemaSessions
                        .Any(css => css.Id == sessionId)));

            // Her 8 eleman için bir diziye böl
            var groupedSeats = cinemaSessionSeats.Select((seat, index) => new { seat, index })
                                    .GroupBy(x => x.index / 8)
                                    .Select(group => group.Select(x => x.seat).ToList())
                                    .ToList();
            MovieDetailVM movieDetailVM = new MovieDetailVM()
            {
                Movie = film,
                GroupedSeats = groupedSeats,
                cinema = cinema,
                cinemaSession = db.CinemaSession.FirstOrDefault(cs => cs.Id == sessionId)
            };

            return View(movieDetailVM);
        }
        [Authorize]
        [HttpPost]
        public IActionResult Pay(string selectedSeats,int cinemaSessionId)
        {
            string[] seatArray = selectedSeats.Split(',');

            List<int> seatList = new List<int>();

            foreach (var seat in seatArray)
            {
                if (int.TryParse(seat, out int seatNumber))
                {
                    seatList.Add(seatNumber);
                }
            }



            foreach (var seatNumber in seatList)
            {
                var cinemaSessionSeat = db.CinemaSessionSeat
                    .FirstOrDefault(cs => cs.Id == seatNumber);

                if (cinemaSessionSeat != null)
                {

                    if (cinemaSessionSeat != null)
                    {
                        cinemaSessionSeat.IsOccupied = true;
                    }
                    else
                    {
                        var newCinemaSessionSeat = new CinemaSessionSeat
                        {
                            CinemaSessionId = cinemaSessionId,
                            SeatId = seatNumber,
                            IsOccupied = true
                        };

                        db.CinemaSessionSeat.Add(newCinemaSessionSeat);
                    }
                }
            }

            var orders = db.Order.ToList();
            var user = db.ApplicationUser.FirstOrDefault(a => a.UserName == User.Identity.Name);

            Order order=new Order()
            {
                seats=seatList,
                UserId=user.Id
            };
            db.Order.Add(order);    
            db.SaveChanges();


    
            return RedirectToAction("Order");
        }

        [Authorize]

        public IActionResult CompleteShopping()
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var claim = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier);


            return RedirectToAction("Order");
        }
        [Authorize]
        public IActionResult Order()
        {
            Iyzipay.Options options = new Iyzipay.Options();
            options.ApiKey = "sandbox-iUdgXRJR4qadGdy88OUkcgozyHntvaMQ";
            options.SecretKey = "sandbox-O0ZDkX0bfjTJmfKxcMdX8zdgJRMKLEYP";
            options.BaseUrl = "Https://sandbox-api.iyzipay.com";



            CreateCheckoutFormInitializeRequest request = new CreateCheckoutFormInitializeRequest();
            request.Locale = Locale.TR.ToString();
            request.ConversationId = "123456789";
            request.Price = "1";
            request.PaidPrice = "1";
            request.Currency = Currency.TRY.ToString();
            request.BasketId = "B67832";
            request.PaymentGroup = PaymentGroup.PRODUCT.ToString();
            request.CallbackUrl = "https://localhost:7291/Customer/Home/Success";


            Buyer buyer = new Buyer();
            buyer.Id = "asdadsada";
            buyer.Name = "Erhan";
            buyer.Surname = "Kaya";
            buyer.GsmNumber = "+905554443322";
            buyer.Email = "email@email.com";
            buyer.IdentityNumber = "74300864791";
            buyer.LastLoginDate = "2015-10-05 12:43:35";
            buyer.RegistrationDate = "2000-12-12 12:00:00";
            buyer.RegistrationAddress = "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1";
            buyer.Ip = "85.34.78.112";
            buyer.City = "Istanbul";
            buyer.Country = "Turkey";
            buyer.ZipCode = "34732";
            request.Buyer = buyer;

            Address shippingAddress = new Address();
            shippingAddress.ContactName = "Erhan Kaya";
            shippingAddress.City = "Istanbul";
            shippingAddress.Country = "Turkey";
            shippingAddress.Description = "Bereket döner karşısı";
            shippingAddress.ZipCode = "34742";
            request.ShippingAddress = shippingAddress;

            Address billingAddress = new Address();
            billingAddress.ContactName = "Erhan Kaya";
            billingAddress.City = "Istanbul";
            billingAddress.Country = "Turkey";
            billingAddress.Description = "Bereket Döner";
            billingAddress.ZipCode = "34742";
            request.BillingAddress = billingAddress;

            List<BasketItem> basketItems = new List<BasketItem>();
            BasketItem basketProduct;
            basketProduct = new BasketItem();
            basketProduct.Id = "1";
            basketProduct.Name = "Asus Bilgisayar";
            basketProduct.Category1 = "Bilgisayar";
            basketProduct.Category2 = "";
            basketProduct.ItemType = BasketItemType.PHYSICAL.ToString();

            double price = 1;
            double endPrice = 1;
            basketProduct.Price = endPrice.ToString().Replace(",", "");
            basketItems.Add(basketProduct);

            request.BasketItems = basketItems;

            CheckoutFormInitialize checkoutFormInitialize = CheckoutFormInitialize.Create(request, options);
            ViewBag.pay = checkoutFormInitialize.CheckoutFormContent;
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public IActionResult Success()
        {
            return View();
        }
    }
}
