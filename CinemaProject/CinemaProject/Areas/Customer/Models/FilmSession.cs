using CinemaProject.Models;

namespace CinemaProject.Areas.Customer.Models
{
    public class FilmSession
    {
        public DateTime? SessionTime { get; set; }
        public MovieSpecified MovieSpecified { get; set; }
        public int CinemaSessionId { get; set; } 

    }
}
