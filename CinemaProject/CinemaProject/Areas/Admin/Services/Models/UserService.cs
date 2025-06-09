using CinemaProject.Areas.Admin.Services.Interfaces;
using CinemaProject.Data;
using CinemaProject.Models;

namespace CinemaProject.Areas.Admin.Services.Models
{
    public class UserService : IUserService
    {

        private readonly ApplicationDbContext db;
        public UserService(ApplicationDbContext db) {
        this.db = db;
                }

        public Task<bool> AddUserAsync(ApplicationUser user)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteUserAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<ApplicationUser>> GetAllUserAsync()
        {
            var users=db.ApplicationUser.ToList();
            var roles=db.Roles.ToList();
            var userRole=db.UserRoles.ToList();
            foreach (var user in users) {
                var roleId=userRole.FirstOrDefault(x=>x.UserId==user.Id).RoleId;
                user.Role = roles.FirstOrDefault(x=>x.Id==roleId).Name;
            }
            return Task.FromResult(users);
        }

        

        public Task<bool> UpdateUserAsync(ApplicationUser user)
        {
            throw new NotImplementedException();
        }
    }
}
