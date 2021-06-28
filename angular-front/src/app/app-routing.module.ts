import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddformComponent } from '../components/addform/addform.component';
import { UserComponent } from '../components/user/user/user.component';


const routes: Routes = [
  { path: 'app-addform', component: AddformComponent } ,
  { path: 'app-user', component: UserComponent } ,
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
