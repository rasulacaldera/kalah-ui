import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGameComponent } from './home/create-game/create-game.component';
import { GameComponent } from './home/game/game.component';
import { GameRowComponent } from './home/game-row/game-row.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateGameComponent,
    GameComponent,
    GameRowComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
