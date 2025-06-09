namespace CinemaProject.Models
{
    public class MovieSpecified
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public Movie Movie { get; set; }
        public List<CinemaSession> cinemaSessions { get; set; }
        public bool? IsEnglish { get; set; }
        public bool? IsTurkish { get; set; }
        public bool? IsImax { get; set; }
        public bool? Is3d { get; set; }
        public bool? Is2d { get; set; }

    }
}
