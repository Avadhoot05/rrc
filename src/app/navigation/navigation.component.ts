import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {



  menuExpanded: boolean = false;

  constructor(private zone: NgZone) {

  }

  ngOnInit(): void {
  }

  hamburgerMenuClicked(){
    this.menuExpanded = !this.menuExpanded
  }

  destinationChanged(){
    this.menuExpanded = false;
  }

}
