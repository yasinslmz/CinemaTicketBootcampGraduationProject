using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaProject.Models
{
    public class CinemaSession
    {
        public int Id { get; set; }
        public int? CinemaSalonId { get; set; }
        public CinemaSalon? CinemaSalon { get; set; }
        public string? Name { get; set; }
       
        public DateTime? SessionTime { get; set; }

        public int? MovieSpecifiedId { get; set; }
        public MovieSpecified? MovieSpecified { get; set; }
        public List<CinemaSessionSeat>? cinemaSessionSeats { get; set; }
        [NotMapped]
        public SelectList? MovieOptions { get; set; }
        [NotMapped]
        public SelectList? CinemaSalonOptions { get; set; }
        [NotMapped]
        public bool? IsValid => CheckSessionTime(SessionTime.GetValueOrDefault());

        private bool CheckSessionTime(DateTime sessionTime)
        {
            // Şuanki tarih ve saat bilgisini al
            DateTime now = DateTime.Now;

            // Seansın başlama ve bitiş zamanını ayarla (2 saat önce ve 2 saat sonra)
            DateTime sessionStart = sessionTime.AddHours(-2);
            DateTime sessionEnd = sessionTime.AddHours(2);

            // Eğer şuanki tarih ve saat, seansın bitiş zamanından önce ve başlama zamanından sonra ise geçerli
            return now < sessionEnd && now > sessionStart;
        }

    }
}
