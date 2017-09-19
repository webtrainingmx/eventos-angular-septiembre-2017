import { Component, OnInit } from '@angular/core';
import { EventosService } from './services/eventos.service';
import { Evento } from './models/evento';

@Component( {
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: [ './eventos.component.css' ]
} )
export class EventosComponent implements OnInit {

  eventos: Array<Evento> = [];

  constructor( private eventsService: EventosService ) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe(
      ( data: Evento[] ) => {
        this.eventos = data;
        console.log( data );
      }
    );
  }

}
