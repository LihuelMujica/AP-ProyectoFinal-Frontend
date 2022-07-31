import { Component, OnInit } from '@angular/core';

import { Experience } from '../../models/experience.model'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      id: 0,
      title: 'Pasantía - Colegio Nacional Paraná Nº 1 "Domingo F. Sarmiento"',
      start: new Date(2021,5),
      end: new Date(2023,12),
      image: '',
      description: 'Responsabilidades: reparación de equipos informáticos, implementación de un sistema de relevamiento del mobiliario, desarrollo de un videojuego utilizando Scratch (obtuvo el segundo lugar en el concurso "Descubriendo Ingeniería" de la UTN)'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
