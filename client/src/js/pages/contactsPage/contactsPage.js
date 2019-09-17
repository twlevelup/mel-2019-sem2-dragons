const BasePage = require('../customBasePage/CustomBasePage');
const StorageHub = require('watch-framework').StorageHub;

class ContactsPage extends BasePage {
  template = require('./contactsPage.hbs');

  pageWillLoad() {
    this.contacts = StorageHub.getData('contacts')
  }

  leftButtonEvent() {
    this.navigate('/');
  }

}

module.exports = ContactsPage;
