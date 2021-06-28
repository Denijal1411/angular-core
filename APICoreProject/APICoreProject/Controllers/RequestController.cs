using BusinessLogic.Repository;
using BusinessLogic.Repository.Interfaces;
using BusinessLogic.RepositoryModels;
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
        //0037563 ovde koristim dependency i to mi je ukljuceno u servise oznaceno rednim brojem #225
        private  IUserBusinessLogic userBusinessLogic;
        public RequestController(IUserBusinessLogic userBusinessLogic)
        {
            this.userBusinessLogic = userBusinessLogic;
        }
        public async Task<IActionResult> GetAllUser()
        { 
            var items = userBusinessLogic.GetAll(); 
            return Ok(items);
        }
        [System.Web.Http.HttpPost]
        
        public async Task<IActionResult> CreateUser(UserModel user)
        {
            if (ModelState.IsValid)
            {
                userBusinessLogic.Create(user);
                return Ok();
            }
            else
                return BadRequest();
        }
    }
}
