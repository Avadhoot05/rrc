import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input("experience") exp: Experience = new Experience("","","",[],[])

  constructor() { }

  ngOnInit(): void {
    
  }

}
