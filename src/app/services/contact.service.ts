import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  set contacts(contact: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }

  get contacts(): Contact[] {
    return JSON.parse(localStorage.getItem('contacts') || '');
  }
}
