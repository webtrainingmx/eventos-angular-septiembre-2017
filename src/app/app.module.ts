import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventosService } from './eventos/services/eventos.service';
import { ChangeImageURLPipe } from './change-image-url.pipe';

@NgModule( {
  declarations: [
    AppComponent,
    EventosComponent,
    ChangeImageURLPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ EventosService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}
