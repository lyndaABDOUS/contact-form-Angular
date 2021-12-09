import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Déclaration d'un titre
  public title = 'contact';
  // Déclaration d'un tableau de contacts initialisé à vide
  public contacts: Contact[] = [];
  // Déclaration du contact choisi par l'utilisateur
  public contactactive!: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    // A l'initialisation, je récupère les contacts du localStorage.
    this.contacts = this.contactService.contacts;
  }

  /**
  * Fonction qui permet de rajouter un nouveau contact dans le tableau.
  * @param event
  */
  addContact(event: any) {
    // Récupération du Contact via l'evenement
    const c: Contact = event.contact;

    // Attribution d'un ID au Contact
    c.id = this.contacts.length + 1;

    // Ajout du Contact dans le Tableau
    this.contacts.push(c);

    // On sauvegarde les Contacts
    this.saveContacts();
  }

  // Fonction de sauvegarde des contacts
  saveContacts() {
    this.contactService.contacts = this.contacts;
  }

  /**
  * Fonction setActive, prend un contact en paramètre et le transmet à la variable contactactive
  * @param c de type Contact
  */
  setActive(c: Contact) {
    this.contactactive = c;
  }
}
