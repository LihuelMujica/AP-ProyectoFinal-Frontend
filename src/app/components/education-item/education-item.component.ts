import { Component, OnInit, Input } from '@angular/core';

import { Education } from '../../models/education.model'

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit {

  @Input() education: Education = {
    id: 1,
    title: "#YoProgramo - Argentina Programa",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!',
    start: new Date(2021,11),
    end: new Date(2022,7),
    image: './assets/images/AP2.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
