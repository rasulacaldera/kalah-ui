import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.scss']
})
export class GameRowComponent implements OnInit {

  @Input() buckets: any;
  @Output() onMakeMove = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onMove(bucket: any) {
    this.onMakeMove.emit(bucket)
  }
}
