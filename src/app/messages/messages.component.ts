import { Component } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  // messageService has to be public since we will bind to it in the template
  // in other words, to make use of the methods and properties in messageService while in the HTML file
  constructor(public messageService: MessageService) {}
}
