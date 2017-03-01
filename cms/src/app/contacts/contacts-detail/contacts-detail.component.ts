import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../contact';
import {Subscription} from "rxjs";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css'],
  providers: [ContactsService]
})
export class ContactsDetailComponent implements OnInit {

  subscription: Subscription;
  contactIdx: number;
  contact: Contact;
  contactGroup: Contact[];

  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.contactIdx = params['idx'];
        this.contact = this.contactsService.getContact(this.contactIdx);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
