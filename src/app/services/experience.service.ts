import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment'

import { Experience } from '../models/experience.model'

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl = `${environment.API_URL}/experience`

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Experience[]>(this.apiUrl);
  }
}
