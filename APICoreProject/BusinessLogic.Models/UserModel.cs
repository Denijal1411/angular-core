using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BusinessLogic.RepositoryModels
{
    public class UserModel
    {        [Key]
            public int ID { get; set; }
            public string firstName { get; set; }
            public string lastName { get; set; }
            public string JMBG { get; set; } 
    }
}
