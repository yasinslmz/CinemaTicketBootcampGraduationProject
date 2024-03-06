
using CinemaProject.Models;
namespace CinemaProject.Areas.Customer.Models
{
    public class MovieDetailVM
    {
        public  Movie Movie { get; set; }
        public List<List<CinemaSessionSeat>>? GroupedSeats { get; set; }
        public Cinema? cinema { get; set; }
        public CinemaSession? cinemaSession { get; set; }
        public int? cityId { get; set; }

    }
}
