using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class DBContexts:DbContext
    {
        public DBContexts()
        {
        } 
        public DBContexts(DbContextOptions<DBContexts> options) : base(options)
        {
        }
        //0037563
        //ovo je potrebno dodati kako bi mi radio DB SET celu ovu metodu
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-OM73PGP;Initial Catalog=ApiProject;Integrated Security=True");
            }
        }
        public DbSet<User> Users { get; set; }
    }
}
