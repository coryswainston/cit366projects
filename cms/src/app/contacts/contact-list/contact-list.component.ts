import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Contact} from "../../contact";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  providers: [ContactsService]
})

export class ContactListComponent implements OnInit {

  @Output() selectedContact = new EventEmitter<Contact>();
  contact: Contact = null;
  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  onSelected(contact: Contact) {
    this.selectedContact.emit(contact);
  }
}
