import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';


@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {

  selectedContact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
