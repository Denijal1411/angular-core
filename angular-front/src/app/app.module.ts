import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { SubmenuModule } from '../components/submenu/submenu/submenu.module';
import { UserModule } from '../components/user/user/user.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubmenuModule,
    FormsModule,
    UserModule,
    HttpClientModule, 
    NgbModule,ReactiveFormsModule
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
