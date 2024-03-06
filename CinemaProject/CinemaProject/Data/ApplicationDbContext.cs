using CinemaProject.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CinemaProject.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<ApplicationUser> ApplicationUser { get; set; }
        
        public DbSet<City> City { get; set; }
        public DbSet<Cinema> Cinema { get; set; }
        public DbSet<Movie> Movie { get; set; }
        public DbSet<CinemaSalon> CinemaSalon { get; set; }
        public DbSet<CinemaSession> CinemaSession { get; set; }
        public DbSet<MovieSpecified> MovieSpecified { get; set; }
        public DbSet<Seat> Seat { get; set; }
        public DbSet<CinemaSessionSeat> CinemaSessionSeat { get; set; }

        public DbSet<Order> Order { get; set; }


    }
}
