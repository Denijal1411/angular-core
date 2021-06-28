import { Component, OnInit } from '@angular/core'; 
import { FormElement } from '../../models/form/form-element';
import { Form } from '../../models/form/form.model';
import { User } from '../../models/request.models';
import { Router } from "@angular/router";
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  firstName:string;
  form: Form=new Form(); 
  modelSave: User = new User();

  constructor(private requestService:RequestService,private router: Router) { } 
   submit=()=> {  
      
    this.modelSave.firstName = (<HTMLInputElement>document.getElementById("firstName")).value; 
    this.modelSave.lastName = (<HTMLInputElement>document.getElementById("lastName")).value;  
     this.requestService.CreateUser(this.modelSave);   
    this.router.navigate(['/app-user']); 
 }
  ngOnInit(): void {  
  }

}
