import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutDataService {
  constructor() { }

  initials: string = "RRC"

  name: string = "RGIT's"
  surname: string = "Robotics Club"
  tagline: string = "The Official Robotics Club of MCT's Rajiv Gandhi Institute of Technology"

  email: string = "mailto:abhishekjagushte@gmail.com"
  linkedIn: string = "https://www.linkedin.com/in/abhishekjagushte/"
  instagram: string = "https://www.instagram.com/abhishekjagushte/" 
  brochure: string = "https://drive.google.com/file/d/1ifZ1__nMWhbJyg-ZS53I_wKpCsLsPMAQ/view?usp=sharing"
  facebook: string = "https://www.instagram.com/abhishekjagushte/"
}
