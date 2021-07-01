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
using HttpDeleteAttribute = System.Web.Http.HttpDeleteAttribute;

namespace APICoreProject.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("{controller}/{action}/{id?}")]
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
        [System.Web.Http.HttpDelete]
        public async Task<IActionResult> DeleteUser(int id) {
            userBusinessLogic.Delete(id);
            return Ok();
        } 
        public async Task<IActionResult> GetUser(int id) {
            var items=userBusinessLogic.GetById(id);
            return Ok(items);
        }

    }
}
