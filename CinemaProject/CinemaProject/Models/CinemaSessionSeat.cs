namespace CinemaProject.Models
{
    public class CinemaSessionSeat
    {
        public int Id { get; set; }
        public int CinemaSessionId { get; set; }
        public CinemaSession CinemaSession { get; set; }

        public int SeatId { get; set; }

        public Seat Seat { get; set; }

        public bool? IsOccupied { get; set; }
    }
}
