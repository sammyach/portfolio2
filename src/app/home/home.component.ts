import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeAbout="active";activeProj="";activeExp="";
  constructor() { }

  ngOnInit(): void {
  }

  onLinkClick(link: any){
    this.activeAbout="";this.activeProj="";this.activeExp="";
    switch (link){
      case "about":
        this.activeAbout = 'active';
        break;
      case "exp":
        this.activeExp = 'active';
        break;
      case "proj":
        this.activeProj = 'active';
        break;
      
    }
  }

}
