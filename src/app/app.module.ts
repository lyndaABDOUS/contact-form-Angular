import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
