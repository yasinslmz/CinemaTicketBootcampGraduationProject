using CinemaProject.Models;

namespace CinemaProject.Areas.Customer.Models
{
    public class MovieDirectVM
    {
        public List<Movie>? movies { get; set; }
        public int? cityId { get; set; }
    }
}
