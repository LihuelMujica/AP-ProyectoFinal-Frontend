import { Component, OnInit, Input } from '@angular/core';

import { Skill } from '../../models/skill.model'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill = {
    id: 0,
    title: 'Spring',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, quod quam ratione nobis corrupti!'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
