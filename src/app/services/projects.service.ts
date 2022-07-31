import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment'

import { Project } from '../models/project.model'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = `${environment.API_URL}/projects`

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
