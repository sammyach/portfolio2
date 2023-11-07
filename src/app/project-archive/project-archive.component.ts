import { Component, OnInit } from '@angular/core';
import projects from '../../assets/json/project-archive.json';

@Component({
  selector: 'app-project-archive',
  templateUrl: './project-archive.component.html',
  styleUrls: ['./project-archive.component.scss']
})
export class ProjectArchiveComponent implements OnInit {

  constructor() { }
  public projectList: any[]=projects.archive;
  //{Year: string, Project: string, Client: string, Stack: string, Link: string}
  ngOnInit(): void {
  }

}
