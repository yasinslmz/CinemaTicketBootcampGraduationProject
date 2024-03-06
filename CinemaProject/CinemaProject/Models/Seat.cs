using System;

using System.ComponentModel.DataAnnotations.Schema;
namespace CinemaProject.Models
{
    public class Seat
    {
        public int Id { get; set; }
        public string? RowColumn { get; set; }
        public int CinemaSalonId { get; set; }
        public CinemaSalon CinemaSalon { get; set; }
        [NotMapped]
        public bool? IsOccupied { get; set; }
        public List<CinemaSessionSeat> cinemaSessionSeats { get; set; }


    }
}
