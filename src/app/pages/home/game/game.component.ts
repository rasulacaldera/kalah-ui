import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: any;
  @Output() onMakeMove = new EventEmitter<string>();


  buckets: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["game"].currentValue && changes["game"].currentValue.buckets) {
      this.buckets = changes["game"].currentValue.buckets
    }
  }

  onMove(pit: any) {
    this.onMakeMove.emit(pit.index)
  }

  getPlayerBuckets(player: string) {
    if (player === 'PLAYER_TWO') {
      return this.buckets.filter(bucket => bucket.owner === player).sort(this.compare)
    }
    return this.buckets.filter(bucket => bucket.owner === player)
  }

  compare(a: any, b: any) {
    if (a.index > b.index) {
      return -1;
    }
    if (a.index < b.index) {
      return 1;
    }
    return 0;
  }

}
