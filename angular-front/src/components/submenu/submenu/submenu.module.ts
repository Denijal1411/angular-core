import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuComponent } from './submenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SubmenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SubmenuComponent
  ]
})
export class SubmenuModule { }
