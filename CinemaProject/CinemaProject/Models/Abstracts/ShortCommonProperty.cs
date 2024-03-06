namespace CinemaProject.Models.Abstracts
{
    public abstract class ShortCommonProperty
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public bool IsStatus { get; set; }
        public bool IsDelete { get; set; }

    }
}
