using BusinessLogic.RepositoryModels;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Repository.Interfaces
{
    public interface IUserBusinessLogic : IGenericBusinessLogic<UserModel,User>
    { 
    }
}
