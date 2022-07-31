import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from './../../environments/environment'

import { Education } from '../models/education.model'

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiUrl = `${environment.API_URL}/education`

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Education[]>(this.apiUrl);
  }
}
