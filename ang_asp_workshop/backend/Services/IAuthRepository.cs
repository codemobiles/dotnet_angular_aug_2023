using backend.Models;

namespace backend.Services
{
    public interface IAuthRepository
    {
        void Register(User user);

    }

}