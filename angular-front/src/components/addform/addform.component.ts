import { Component, OnInit } from '@angular/core'; 
import { Form,FormElement } from '../../models/form';
import { User } from '../../models/request.models';
import { Router } from "@angular/router";
import { RequestService } from '../../services/request.service'; 

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit { 
  form: Form=new Form(); 
  modelSave: User = new User();
  showMsg:boolean;
  users:User[]=[]; 

  constructor(private requestService:RequestService,private router: Router) { } 
   submit=()=> {  
     console.log(this.form.elements['firstName'].value)
      if(this.form.isValid()){
        this.modelSave.firstName=this.form.elements['firstName'].value;
        this.modelSave.lastName=this.form.elements['lastName'].value;
        this.modelSave.jmbg=this.form.elements['jmbg'].value;
        this.requestService.CreateUser(this.modelSave);
        this.router.navigate(['/app-user']);    
      } 
      else{
        console.log("INVALID");

      }
    
 }
  ngOnInit(): void {  
     this.initForm(); 

  }
  private initForm() { 
    this.form.elements['firstName'] = new FormElement();
    this.form.elements['firstName'].state.mandatory = true; 
    this.form.elements['lastName'] = new FormElement();
    this.form.elements['jmbg'] = new FormElement(); 
  }

}
