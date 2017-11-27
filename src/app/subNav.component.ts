import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'subNav',
  templateUrl: './subNav.component.html',
  styleUrls: ['./subNav.component.css']
})
export class SubNavComponent {
  constructor(private router: Router) { }
  changeToAbout()
  {
    this.router.navigate(['about']);
  }
  changeToIndex()
  {
    this.router.navigate(['index']);
  }
  changeToFeatures()
  {
    this.router.navigate(['features']);
  }
  changeToPricing()
  {
    this.router.navigate(['pricing']);
  }
  changeToSubmit()
  {
    this.router.navigate(['submit']);
  }
  
}
