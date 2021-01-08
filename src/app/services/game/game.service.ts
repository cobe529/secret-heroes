import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _gameTypeDirectory: string = "../../../assets/game-type"

  constructor(private http: HttpClient) { }

  getWhackType(): Observable<[]> {
    return this.http.get<[]>(`${this._gameTypeDirectory}/whack-type.json`);
  }
}
