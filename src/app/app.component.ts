import { Component } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio2';

  ngOnInit(): void {
    console.log('init app component');
    
    particlesJS.load('particles-js', 'assets/json/particles.json', null);
  }
}
