import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: string = "Abhishek"
  surname: string = "Jagushte"
  tagline: string = "Software Developer"

  constructor() { }

  ngOnInit(): void {
  }

}
