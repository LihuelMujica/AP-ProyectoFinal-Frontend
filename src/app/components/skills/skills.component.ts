import { Component, OnInit } from '@angular/core';

import { Skill } from '../../models/skill.model'

import { SkillsService } from '../../services/skills.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      id: 0,
      title: 'Spring',
      image: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!'
    },
    {
      id: 0,
      title: 'Angular',
      image: '',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!'
    }
  ];

  constructor(
    private service: SkillsService
  ) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(data => this.skills = data);
  }

}
