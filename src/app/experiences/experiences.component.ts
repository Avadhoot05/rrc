import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../data/experiences.service';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: Experience[] = []

  constructor(private experiencesService: ExperiencesService) { 
    this.experiences = this.experiencesService.experiences
  }

  ngOnInit(): void {
  }

}
