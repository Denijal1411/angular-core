import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AddformComponent } from './addform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AddformComponent],
  imports: [
    CommonModule 
  ],
  exports:[
    AddformComponent
    ]
})
export class AddformModule { }
