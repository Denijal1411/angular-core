import { Injectable } from "@angular/core";
import {HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"; 
import { User } from "../models/request.models";



const baseUrl = `https://localhost:44307/request`;

@Injectable({
    providedIn: 'root'
  })

export class RequestService{
    
    constructor(private http: HttpClient) {}
 

    GetAllUser(): Promise<User[]>{
        return this.http.get<User[]>(`${baseUrl}/GetAllUser`).toPromise();
    }  
    CreateUser(model: User) {
        return   this.http.post<User>(`${baseUrl}/CreateUser`, model).toPromise();
    }
    DeleteUser(Id: number) {  
      return   this.http.delete<number>(`${baseUrl}/DeleteUser/${Id}`).toPromise();
    }
    GetUserById(Id: number): Promise<User> {  
      return this.http.get<User>(`${baseUrl}/GetUser/${Id}`).toPromise();
       
    
    }
}