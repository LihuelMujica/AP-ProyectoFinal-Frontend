import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from './../../environments/environment'

import { Profile } from '../models/profile.model'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = `${environment.API_URL}/portfolio`;

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get<Profile>(`${this.apiUrl}/get`);
  }
}
