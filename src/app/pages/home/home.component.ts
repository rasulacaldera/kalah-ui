import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/services/game.service';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentGame: any;

  constructor(private gamesService: GameService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {

  }

  onCreateNewGame(game: any) {
    this.gamesService.createBug(game).subscribe(res => {
      this.currentGame = res;
    });
  }

  onMove(pit: any) {
    this.gamesService.makeMove(this.currentGame.gameId, pit).subscribe(res => {
      this.currentGame = res;
    }, err => {
      this.notificationService.showError(err.error.message);
    });
  }
}
