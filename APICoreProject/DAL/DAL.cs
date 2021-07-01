using DAL.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repository
{
    public class DAL<T> : IGenericDAL<T> where T : class
    {
        private DBContexts _db;
        private DbSet<T> dbSet;

        public DAL()
        {
            _db = new DBContexts();
            dbSet= _db.Set<T>();
        }
         
        public void Delete(object Id)
        {
            var id = Convert.ToInt32(Id);
            var userForDelete = _db.Users.FirstOrDefault(x => x.ID == id);
            _db.Entry(userForDelete).State = EntityState.Deleted;
            Save();
        }

        public IEnumerable<T> GetAll()
        {
            return dbSet.ToList();
        }

        public T GetById(object Id)
        {
            int id = Convert.ToInt32(Id);
            return dbSet.Find(id);
        }

        public void Insert(T obj)
        {
            _db.Entry(obj).State = EntityState.Added;
            Save();

        }

        public void Save()
        {
            _db.SaveChanges();
        }

        public void Update(T obj)
        {
            throw new NotImplementedException();
        }
    }
}
