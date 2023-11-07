import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-pill',
  templateUrl: './skill-pill.component.html',
  styleUrls: ['./skill-pill.component.scss']
})
export class SkillPillComponent implements OnInit {

  @Input("Skills") Skills: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
