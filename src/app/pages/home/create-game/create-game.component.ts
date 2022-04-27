import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  @Output() onCreateNewGame = new EventEmitter<string>();

  gameForm = new FormGroup({
    playerOneName: new FormControl('Player 1'),
    playerTwoName: new FormControl('Player 2')
  });

  constructor() { }

  ngOnInit(): void {
  }

  createNewGame() {
    this.onCreateNewGame.emit(this.gameForm.value)
  }
}
