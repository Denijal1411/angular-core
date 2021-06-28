import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddformComponent } from './addform.component';



@NgModule({
  declarations: [AddformComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule  
  ],
  exports:[
    AddformComponent
  ]
})
export class AddformModule { }
