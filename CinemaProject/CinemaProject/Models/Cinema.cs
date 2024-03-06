namespace CinemaProject.Models
{
    public class Cinema
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? CityId { get; set; }
        public List<CinemaSalon> cinemaSalons { get; set; }

    }
}
