using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Repository.Interfaces
{
    public interface IGenericBusinessLogic<T,DBModel> where T:class where DBModel:class
    {
        List<T> GetAll();
        T GetById(int id);


        void Create(T model);
        void Update(T model);
        void Delete(int id);
        T ConvertFromDBModel(DBModel dBModel);
        DBModel ConvertToDBModel(T model);
    }
}
