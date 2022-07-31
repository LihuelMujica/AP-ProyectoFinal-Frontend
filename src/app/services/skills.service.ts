import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment'

import { Skill } from '../models/skill.model'

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiUrl = `${environment.API_URL}/skill`

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Skill[]>(this.apiUrl);
  }
}
