using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaProject.Models
{
    public class Order
    {
        public int Id { get; set; }
        [NotMapped]
        public List<int>? seats { get; set; }
        public string UserId { get; set; }
        public ApplicationUser? ApplicationUser { get; set; }
    }
}
