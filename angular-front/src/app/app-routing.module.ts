import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';  
import { EditUserComponent } from 'src/view/user/editUser/edit-user/edit-user.component';
import { AddUserFormComponent } from '../view/user/addUser/add-user-form/add-user-form.component';
import { ListUsersComponent } from '../view/user/showUser/list-users/list-users.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    {path: 'app-add-user-form', component: AddUserFormComponent},
    {path: 'app-list-users', component: ListUsersComponent},
    {path: 'app-edit-user', component: EditUserComponent},
 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
