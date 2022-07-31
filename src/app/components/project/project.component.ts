import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../../models/project.model'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project = {
    id: 0,
    title: 'Portfolio Argentina Programa',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!',
    link: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

}
