﻿using DAL.Repository.Interfaces;
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
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            return dbSet.ToList();
        }

        public T GetById(object Id)
        {
            throw new NotImplementedException();
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
