import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventData: any;
  constructor(private httpClient: HttpClient) {
  }

  getAllEvent() {
    return this.httpClient.get('assets/json/events.json');
  }

  
}
