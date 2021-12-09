import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output() newContactEmitter = new EventEmitter();
  public contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [null, [Validators.pattern('[A-Z a-z]{1,100}')]],
      username: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]]
    })
  }

  onSubmit() {
    this.newContactEmitter.emit({ contact: this.contactForm.value });
    this.contactForm.reset();
  }

}
