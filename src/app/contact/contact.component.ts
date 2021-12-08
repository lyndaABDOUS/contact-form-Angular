import { ContactService } from './../services/contact.service';
import { Contact } from './../models/contact';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  @Output() newContactEvent = new EventEmitter();

  contact: Contact = new Contact();


  addContact() {
    this.newContactEvent.emit({ contact: this.contact });
    this.contact = new Contact();
    alert('You have added a new contact')
    }

}
