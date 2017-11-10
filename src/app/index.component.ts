import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private router: Router) { }
  changeToAbout()
  {
    this.router.navigate(['about']);
  }
}
