import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { SubmenuComponent } from '../components/submenu/submenu/submenu.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { ListUsersComponent } from '../view/user/showUser/list-users/list-users.component';
import { AddUserFormComponent } from '../view/user/addUser/add-user-form/add-user-form.component';
  
@NgModule({
  declarations: [ //0037563[ANGULAR]
  //ovde importujem komponente koje koristim
  //dok u imports importujem module
  //service importujem u provider
    AppComponent,
    SubmenuComponent,
    ListUsersComponent,
    AddUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    HttpClientModule, 
    NgbModule 
    
  //   RouterModule.forRoot([
  //     {
  //         path: 'app-addform',
  //         component: AddformComponent
  //     },
  //     {
  //         path: 'app-user',
  //         component: UserComponent
  //     },

  // ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
