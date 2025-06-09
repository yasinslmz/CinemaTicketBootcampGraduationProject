namespace CinemaProject.Models
{
    public class Movie
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public int? Time { get; set; }
        public string? MovieType { get; set; }
        public DateTime? ReleaseTime { get; set; }
        public string? Description { get; set; }
        public string? Director { get; set; }
        public double? Price { get; set; }
        public double? Rate { get; set; }
        public string? Fragman { get; set; }
        public string? Image { get; set; }
        public string? ImageBackground { get; set; }
        public List<MovieSpecified>? movieSpecifieds { get; set; }
    }
}
