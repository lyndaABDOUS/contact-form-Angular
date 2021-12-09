import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  @Input() contact!: Contact;
  @Output() contactchanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  contactChanged() {
    this.contactchanged.emit();
  }

}
