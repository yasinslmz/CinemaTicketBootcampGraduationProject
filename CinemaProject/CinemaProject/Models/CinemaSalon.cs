namespace CinemaProject.Models
{
    public class CinemaSalon
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CinemaId { get; set; }
        public Cinema Cinema { get; set; }
        public int Capacity { get; set; }
        public List<CinemaSession> cinemaSessions { get; set; }
        public List<Seat> seats { get; set; }

    }
}
