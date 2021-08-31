import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-skills-and-achievements',
  templateUrl: './skills-and-achievements.component.html',
  styleUrls: ['./skills-and-achievements.component.css']
})
export class SkillsAndAchievementsComponent implements OnInit {

  constructor() { }

  techIcons = [
    {path: "../../assets/MySQL.webp", name: "MySQL"},
    {path: "../../assets/mongodb.webp", name: "MongoDB"},
    {path: "../../assets/javascript.webp", name: "JavaScript"},
    {path: "../../assets/wordpress.webp", name: "Wordpress"},
    {path: "../../assets/Git.webp", name: "Git"},
    {path: "../../assets/expressjs.png", name: "Express"}
  ]

  ngOnInit(): void {
  }

}
