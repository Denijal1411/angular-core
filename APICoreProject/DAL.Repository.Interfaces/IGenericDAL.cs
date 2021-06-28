using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repository.Interfaces
{
    public interface IGenericDAL<T> where T:class
    {
        IEnumerable<T> GetAll();
        T GetById(object Id);
        void Insert(T obj);
        void Update(T obj);
        void Delete(Object Id);
        void Save();
    }
}
