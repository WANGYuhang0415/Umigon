import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './testPage.component.html',
  styleUrls: ['./testPage.component.css']
})
export class TestPageComponent {
  url: any;  
  tweets: any;
  constructor() {}
  doTest() 
  {
    this.url = "#######";
    /*
    Get the tweets from the font-end and send it to the back-end service by url, return json
    */
  }
}
