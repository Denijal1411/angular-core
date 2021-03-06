using BusinessLogic.Repository.Interfaces;
using BusinessLogic.RepositoryModels;
using DAL.Models;
using DAL.Repository;
using DAL.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BusinessLogic.Repository
{
    public class UserBusinessLogic : IUserBusinessLogic
    {
        private  IGenericDAL<User> repository;

        public UserBusinessLogic()
        {
            repository = new DAL<User>();
        } 
         
        public UserModel ConvertFromDBModel(User dBModel)
        {
            return new UserModel()
            {
                ID=dBModel.ID,
                firstName=dBModel.firstName,
                JMBG=dBModel.JMBG,
                lastName=dBModel.lastName
            };
        }

        public User ConvertToDBModel(UserModel model)
        {
            return new User()
            {
                ID=model.ID,
                firstName=model.firstName,
                lastName=model.lastName,
                JMBG=model.JMBG
            };
        }

        public void Create(UserModel model)
        {
            repository.Insert(ConvertToDBModel(model));
        }

        public void Delete(int id)
        {
            repository.Delete(id);
            
        }

        public List<UserModel> GetAll()
        {
            List<UserModel> listItems = new List<UserModel>(); 
            foreach (var item in repository.GetAll())
            {
                listItems.Add(ConvertFromDBModel(item));
            }
            return listItems;
        }

        public UserModel GetById(int id)
        {
            return ConvertFromDBModel(repository.GetById(id));
        }

        public void Update(UserModel model)
        {
            throw new NotImplementedException();
        }
    }
}
