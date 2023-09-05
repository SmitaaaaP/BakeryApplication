import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  adminId: string = "";

  constructor(private authService: AuthService, private routeService: RouteService , private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  validateDetails(){
    this.authService.login(this.adminId);
    if(this.authService.isLoggedIn){
      this.routeService.navigateToViewOrdersView();
    }
    else{
      this.snackbar.open("Please enter valid code !! " , "OK" , {
        duration: 5000
      });
      this.routeService.navigateToLoginView();
    }
  }
}
