using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http; 

namespace APICoreProject.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("[controller]/[action]")]
    [ApiController]
    [EnableCors("AnotherPolicy")]
    public class RequestController : ControllerBase
    {
        private DBContexts db;
        public RequestController(DBContexts _db)
        {
            db = _db;
        }
        public async Task<IActionResult> GetAllUser()
        { 
            var items = db.Users.ToList(); 
            return Ok(items);
        }
        [System.Web.Http.HttpPost]
        
        public async Task<IActionResult> CreateUser(User user)
        {
            if (ModelState.IsValid)
            { 
                db.Users.Add(user);
                db.SaveChanges();
                return Ok();
            }
            else
                return BadRequest();
        }
    }
}
