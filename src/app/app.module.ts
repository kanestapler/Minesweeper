import { BoardCreatorService } from './board-creator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

@NgModule({
    declarations: [
        AppComponent,
        BoardComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [BoardCreatorService],
    bootstrap: [AppComponent]
})
export class AppModule { }
