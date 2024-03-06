using CinemaProject.Models;

namespace CinemaProject.Areas.Admin.Services.Interfaces
{
    public interface IUserService
    {
        public Task<bool> AddUserAsync(ApplicationUser user);
        public Task<List<ApplicationUser>> GetAllUserAsync();
       
        public Task<bool> UpdateUserAsync(ApplicationUser user);
        public Task<bool> DeleteUserAsync(int id);
    }
}
