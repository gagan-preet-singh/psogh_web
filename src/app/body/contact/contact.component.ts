import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'psh-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.email, Validators.required])
  phone = new FormControl('', [])
  comment = new FormControl('', [Validators.required])
  subject = new FormControl('Contact US Form submitted on Website', [Validators.required])
  honeypot = new FormControl('', [])
  // comments = new FormControl('', [Validators.required])
  // comments = new FormControl('', [Validators.required])

  constructor(private _builder: FormBuilder, private _contact: ContactService) {
  }

  ngOnInit() { }

  get formValid() {
    return this.name.valid && (this.email.valid || this.phone.valid) && this.comment.valid
  }

  onSubmit() {
    console.log('onSubmit');
    console.log({
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      comment: this.comment.value,
      _subject: this.subject.value,
      _honeypot: this.honeypot.value,
      _replyto: this.email.value,
      _after: 'https://punjabisociety.net/',
      _confirmation: 'Thank you for contacting Punjabi Society of Greater Houston!'
    });
    this._contact.PostMessage({
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      comment: this.comment.value,
      _subject: this.subject.value,
      _honeypot: this.honeypot.value,
      _replyto: this.email.value,
      _after: 'http://localhost:4200',
      _confirmation: 'Thank you for contacting Punjabi Society of Greater Houston!'
    }).subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)
    })
  }
}