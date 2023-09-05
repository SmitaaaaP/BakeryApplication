import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  login(adminId: string){
    return this.isLoggedIn = adminId === "BAC@2023";
  }

  logout(){
    this.isLoggedIn = false;
  }

  constructor() { }
}
