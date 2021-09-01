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
  email: string = "mailto:rgitsroboticsclub@gmail.com"
  linkedIn: string = "https://www.linkedin.com/in/abhishekjagushte/"
  instagram: string = "https://www.instagram.com/abhishekjagushte/" 
  brochure: string = "https://drive.google.com/file/d/1ifZ1__nMWhbJyg-ZS53I_wKpCsLsPMAQ/view?usp=sharing"
  facebook: string = "https://www.instagram.com/abhishekjagushte/"

  constructor(private aboutdataService: AboutDataService) { }

  ngOnInit(): void {
    this.name = this.aboutdataService.name
    this.surname = this.aboutdataService.surname
    this.tagline = this.aboutdataService.tagline
    this.email = this.aboutdataService.email
    this.instagram = this.aboutdataService.instagram
    this.linkedIn = this.aboutdataService.linkedIn
    this.brochure = this.aboutdataService.brochure
    this.facebook = this.aboutdataService.facebook
  }

}
