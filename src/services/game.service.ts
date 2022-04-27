import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private GAME_SERVICE: string = SERVER + '/game';

  constructor(private http: HttpClient) { }

  createBug(bug: any) {
    return this.http.post(this.GAME_SERVICE, bug);
  }

  makeMove(id: string, pit: number) {
    return this.http.put(this.GAME_SERVICE + "/" + id + "/pits/" + pit, {});
  }
}
