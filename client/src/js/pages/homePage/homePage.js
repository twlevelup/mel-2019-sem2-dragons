const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/donutcat.gif');
const plop = './sounds/plop.mp3';

//test for raspberrypi
class HomePage extends BasePage {
  template = require('./homePage.hbs');

  pageWillLoad() {
    StorageHub.setData('contacts', [{
        name: 'Ray',
        phoneNumber: '0431 111 111'
      },
      {
        name: 'Sinan',
        phoneNumber: '0431 222 222'
      },
      {
        name: 'Jafari',
        phoneNumber: '0431 333 333'
      }
    ]);

    this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;
  }

  getDateTime() {
    const date = new Date(Date.now());
    const dateTime = date.toLocaleString('en-AU').split(',')[0];
    const timeHour = date
      .toLocaleDateString('en-AU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
      .split(', ')[1];

    return {
      date: dateTime,
      time: timeHour
    };
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementById('clock-time');
    if (clockTime) {
      clockTime.textContent = getTime().time;
    }
  }

  rightButtonEvent() {
    this.navigate('contacts');
  }

  leftButtonEvent() {
    AudioHub.playSound(plop);
  }

  faceButtonEvent() {
    StorageHub.setDebug(true);
    StorageHub.setData("stars", 0);
    this.navigate('identifyNumber');
  }
}

module.exports = HomePage;
