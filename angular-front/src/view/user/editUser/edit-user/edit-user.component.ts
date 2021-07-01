import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models';
import { Form, FormElement } from 'src/models/form';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html' 
})
export class EditUserComponent implements OnInit {
  userModel: User = {
    id: null,
    firstName:'',
    lastName:'',
    jmbg:''

  };
  constructor(private requestService:RequestService,private route: ActivatedRoute,private router: Router) { } 
  form: Form=new Form(); 
  
  showMsg:boolean=false;
  users:User[]=[];  

  ngOnInit(): void {    
    this.getUser(this.route.snapshot.params.id);
    
  }
  private getUser(id:number):void{ 
    this.requestService.GetUserById(id).then((x) => { 
      this.userModel = x } )
      
  } 

}
