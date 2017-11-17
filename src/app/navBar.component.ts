import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class navBarComponent {
  constructor(private router: Router) { }
  changeToAbout()
  {
    this.router.navigate(['about']);
  }
  
}
