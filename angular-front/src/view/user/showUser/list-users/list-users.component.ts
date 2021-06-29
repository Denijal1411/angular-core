import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../models/user/user.models';
import { RequestService } from '../../../../services/request.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private requestService:RequestService,private router: Router) { }

  model:User =new User();
  userList:User[]=[];  
  getUser():void{ 
    this.requestService.GetAllUser().then((x: User[]) => {
      this.userList = x }); 
  } 
  
  ngOnInit(): void { 
    this.getUser();  
  }

}
