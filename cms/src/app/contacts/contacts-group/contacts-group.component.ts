import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'cms-contacts-group',
  templateUrl: './contacts-group.component.html',
})
export class ContactsGroupComponent implements OnInit {

  @Input() selectedContact: Contact;
  groupContacts: Contact[] = [];

  constructor() { }

  ngOnChanges() {
    this.groupContacts = this.selectedContact.group;
  }

  ngOnInit() {
  }

}
