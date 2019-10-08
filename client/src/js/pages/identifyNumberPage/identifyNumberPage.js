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
		this.chosenValue = numbers.chosenValue;
		this.left = numbers.left.num;
		this.right = numbers.right.num;
		this.soundLeft = numbers.left.sound;
		this.soundRight = numbers.right.sound;
	}

	pageDidLoad() {
		this.topButtonEvent();
	}

	getSoundNumberPair() {
		var chosenValue = Math.random() >= 0.5 ? 'left' : 'right';
		const sounds = [ audio0, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9 ];
		const numbers_arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		function shuffle(o) {
			for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
		}
		let random = shuffle(numbers_arr);

		let numLeft = random.shift();
		let numRight = random.shift();

		return {
			left: {
				num: numLeft,
				sound: sounds[numLeft]
			},
			right: {
				num: numRight,
				sound: sounds[numRight]
			},
			chosenValue: chosenValue
		};
	}

	topButtonEvent() {
		if (this.chosenValue === 'left') {
			AudioHub.playSound(this.soundLeft);
		} else {
			AudioHub.playSound(this.soundRight);
		}
	}
	rightButtonEvent() {
		if (this.chosenValue === 'right') {
			this.navigate('success');
		} else {
			this.navigate('failure');
		}
	}

	leftButtonEvent() {
		if (this.chosenValue === 'left') {
			this.navigate('success');
		} else {
			this.navigate('failure');
		}
	}
}

module.exports = IdentifyNumberPage;
