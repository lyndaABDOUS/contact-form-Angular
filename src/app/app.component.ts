import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-form-contact';

  contacts : Contact[] = [];

  constructor(private contactService: ContactService){}

  ngOnInit(){
    this.contacts = this.contactService.contacts;
  }

  newContact(newContactEvent: any) {
    this.contacts.push(newContactEvent.contact);
    this.contactService.contacts = this.contacts;

  }

}
