import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  game: any = {};

  constructor(private gamesService: GameService) { }

  ngOnInit(): void {

  }

  onCreateNewGame(game: any) {
    this.gamesService.createBug(game).subscribe(res => {
      game = res;
      console.log(game)
    });
  }
}
