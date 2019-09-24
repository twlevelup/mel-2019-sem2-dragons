const BasePage = require('../customBasePage/CustomBasePage');
const AudioHub = require('watch-framework').AudioHub;
const audio0 = './sounds/numbers/zero.mp3';
const audio1 = './sounds/numbers/one.mp3';
const audio2 = './sounds/numbers/two.mp3';
const audio3 = './sounds/numbers/three.mp3';
const audio4 = './sounds/numbers/four.mp3';
const audio5 = './sounds/numbers/five.mp3';
const audio6 = './sounds/numbers/six.mp3';
const audio7 = './sounds/numbers/seven.mp3';
const audio8 = './sounds/numbers/eight.mp3';
const audio9 = './sounds/numbers/nine.mp3';

class IdentifyNumberPage extends BasePage {
	template = require('./identifyNumberPage.hbs');

	pageWillLoad() {
		const numbers = this.getSoundNumberPair();

		this.left = numbers.left.num;
		this.right = numbers.right.num;
	}

	getSoundNumberPair() {
		const sounds = [ audio0, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9 ];
		let numLeft = Math.floor(Math.random() * 10);
		let numRight = Math.floor(Math.random() * 10);

		function playSound(sound) {
			AudioHub.playSound(sound);
		}

		return {
			left: {
				num: numLeft,
				sound: playSound(sounds[numLeft])
			},
			right: {
				num: numRight,
				sound: playSound(sounds[numRight])
			}
		};
	}
}

module.exports = IdentifyNumberPage;
