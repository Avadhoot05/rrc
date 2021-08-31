import { Component, OnInit } from '@angular/core';
import { AboutDataService } from '../data/about-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name!: string 
  surname!: string
  tagline!: string

  constructor(private aboutdataService: AboutDataService) { }

  ngOnInit(): void {
    this.name = this.aboutdataService.name
    this.surname = this.aboutdataService.surname
    this.tagline = this.aboutdataService.tagline
  }

}
