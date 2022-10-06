import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from '../../model/event';
import { filterEventObject } from '../../utils/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  searchText = '';
  price = 0;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getAllEvent();
  }
  getAllEvent() {
    this.eventService.getAllEvent().subscribe((res) => {
      this.events = filterEventObject(res);
      console.log(this.events);
    });
  }
}
