using System.ComponentModel.DataAnnotations;

namespace CinemaProject.Areas.Customer.Models
{
    public class FilmRequest
    {
        public string city { get; set; }
        public string cinemaName { get; set; }
        public string filmType { get; set; }

        public int cityId { get; set; }
        public string cinemaDate { get; set; }
    }
}
