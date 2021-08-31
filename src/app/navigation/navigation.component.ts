import { Component, OnInit, NgZone } from '@angular/core';
import { AboutDataService } from '../data/about-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menuExpanded: boolean = false
  initials!: string 
  name!: string 
  surname!: string

  constructor(private aboutData: AboutDataService) {

  }

  ngOnInit(): void {
    this.initials = this.aboutData.initials
    this.name = this.aboutData.name
    this.surname = this.aboutData.surname
  }

  hamburgerMenuClicked(){
    this.menuExpanded = !this.menuExpanded
  }

  destinationChanged(){
    this.menuExpanded = false;
  }

}
