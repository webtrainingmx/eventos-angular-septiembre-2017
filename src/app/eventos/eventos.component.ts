import { Component, OnInit } from '@angular/core';
import { EventosService } from './services/eventos.service';

@Component( {
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: [ './eventos.component.css' ]
} )
export class EventosComponent implements OnInit {

  constructor( private eventsService: EventosService ) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe(
      ( data ) => {
        console.log( data );
      }
    );
  }

}
