import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/request.models';
import { RequestService } from '../../../services/request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
