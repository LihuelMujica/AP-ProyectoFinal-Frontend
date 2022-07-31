import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project.model'

import { ProjectsService } from '../../services/projects.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Argentina Programa',
      image: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!',
      link: ''
    },
    {
      id: 2,
      title: 'API clínica odontológica',
      image: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!',
      link: ''
    }
  ]

  constructor(
    private service: ProjectsService
  ) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(data => this.projects = data);
  }

}
