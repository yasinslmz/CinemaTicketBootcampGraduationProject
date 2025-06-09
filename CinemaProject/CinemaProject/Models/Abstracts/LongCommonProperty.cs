using System.ComponentModel.DataAnnotations;

namespace CinemaProject.Models.Abstracts
{
    public class LongCommonProperty
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Zorunlu Alan")]
        [MinLength(2,ErrorMessage ="En az 2 karakter giriniz")]
        public string? Name { get; set; }
        public bool IsStatus { get; set; }
        public bool IsDelete { get; set; }
        public string? Image { get; set; }
        public string? Description { get; set; }

    }
}
