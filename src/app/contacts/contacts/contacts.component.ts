import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { WorkStatuses } from 'src/app/models/work-statuses.enum';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  public header: string = 'Contacts';
  public description: string = 'Manage your contact list';
  public counterClass: string = 'tag secondary';
  public formHidden: boolean = false;

  public contacts: Contact[];
  public contact: Contact;
  public workStatuses = WorkStatuses;
  public keys = Object.keys;

  constructor() { }

  ngOnInit() {
    this.contacts = [];
    this.contact = {
      id: 1,
      name: '',
      isVip: false,
      gender: '',
      workStatus: WorkStatuses.Unknow,
      company: '',
      education: ''
    };
  }

  /**
   * addContact
   * @param contact
   */
  public addContact(contact: Contact){
    this.contacts.push({ ...contact});
  }

  /**
   * popContact
   */
  public popContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c !== contact);
  }

  /**
   * countContacts
   */
  public countContacts(): number {
    this.counterClass = this.contacts.length === 0 ? 'tag secondary': 'tag primary';
    return this.contacts.length;
  }

  /**
   * setFormHidden
   * @param formHidden
   */
  public setFormHidden(formHidden: boolean) {
    this.formHidden = !formHidden;
  }

}
