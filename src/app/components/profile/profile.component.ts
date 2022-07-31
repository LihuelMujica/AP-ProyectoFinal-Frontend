import { Component, OnInit } from '@angular/core';

import { Profile } from '../../models/profile.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile = {
    id: 0,
    name: 'Lihuel Mujica',
    description: 'Estudiante del curso #YoProgramo (segunda etapa del plan Argentina Programa) y de la carrera Certified Tech Developer (en Digital House)',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto voluptates quibusdam, necessitatibus ipsum maxime enim quo vitae cumque provident repellendus velit quasi repudiandae suscipit dolores consequatur exercitationem architecto consequuntur?',
    profilePicture: './assets/images/sobremi.jpg',
    coverPicture: './assets/images/fondo2.jpg'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
