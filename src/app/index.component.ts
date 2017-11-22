import { Component } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor() { }
  changeTODoc()
  {
    window.location.href = "https://umigon.docs.apiary.io/#";
  }
  changeTOResearch()
  {
    window.location.href = "https://www.cs.york.ac.uk/semeval-2013/accepted/27_Paper.pdf";
  }
}
