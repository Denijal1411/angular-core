using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string JMBG { get; set; }
    }
}
