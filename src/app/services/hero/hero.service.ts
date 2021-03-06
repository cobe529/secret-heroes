import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _openDotaUrl: string = "https://api.opendota.com/api/heroes"

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<[]> {
    return this.http.get<[]>(this._openDotaUrl);
  }
}
