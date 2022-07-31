import { Component, OnInit } from '@angular/core';

import { Education } from '../../models/education.model'

import { EducationService } from '../../services/education.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [
    {
      id: 1,
      title: "#YoProgramo - Argentina Programa",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!',
      start: new Date(2021,11),
      end: new Date(2022,7),
      image: './assets/images/AP2.png'
    },
    {
      id: 2,
      title: "Certified Tech Developer - Digital House",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!',
      start: new Date(2021,11),
      end: new Date(2022,7),
      image: './assets/images/DHLogo.png'
    }
  ]

  constructor(
    private service: EducationService
  ) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(data => this.educations = data);
  }

}
