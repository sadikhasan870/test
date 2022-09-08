import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  constructor (private router:Router){}
  logOut(){
    alert('Log Out Successful');
    this.router.navigate(['/login']);
  }
}
