import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormElement } from '../../../../models/form';
import { User } from '../../../../models/user/user.models';
import { RequestService } from '../../../../services/request.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  constructor(private requestService:RequestService,private router: Router) { } 
  form: Form=new Form(); 
  modelSave: User = new User();
  showMsg:boolean=false;
  users:User[]=[]; 
   
   
   submit=()=> {      
      if(this.form.isValid()){
        this.modelSave.firstName=this.form.elements['firstName'].value;
        this.modelSave.lastName=this.form.elements['lastName'].value;
        this.modelSave.jmbg=this.form.elements['jmbg'].value;
        this.requestService.CreateUser(this.modelSave).then(()=>this.router.navigate(['/app-list-users']));
      } 
      else{
        console.log("INVALID");

      }
    
 } 
  ngOnInit(): void {   
    this.initForm()
  }
  private initForm() { 
    this.form.elements['firstName'] = new FormElement();  
    this.form.elements['lastName'] = new FormElement();
    this.form.elements['jmbg'] = new FormElement(); 
  }
}
