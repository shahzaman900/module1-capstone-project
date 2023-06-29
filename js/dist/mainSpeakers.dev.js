"use strict";

var speakers = [{
  speakerImage: './images/speaker_01.png',
  speakerName: 'Shah Zaman',
  profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
}, {
  speakerImage: './images/speaker_01.png',
  speakerName: 'Shah Zaman',
  profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
}, {
  speakerImage: './images/speaker_01.png',
  speakerName: 'Shah Zaman',
  profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
}, {
  speakerImage: './images/speaker_01.png',
  speakerName: 'Shah Zaman',
  profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
}, {
  speakerImage: './images/speaker_01.png',
  speakerName: 'Shah Zaman',
  profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
}];
var speakerTwoCard = [{
  speakerImage: './images/speaker_01.png',
  speakerName: 'Shah Zaman',
  profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
}, {
  speakerImage: './images/speaker_01.png',
  speakerName: 'Shah Zaman',
  profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
}];
var mainSpeaker = document.getElementById('speaker-cards');

function speakersCards() {
  speakers.map(function (card) {
    var speakerCard = document.createElement('div');
    speakerCard.classList.add('card');
    speakerCard.innerHTML = "\n          <div class=\"card\">\n            <img src=\"".concat(card.speakerImage, "\" alt=\"\">\n            <div class=\"content\">\n              <h2>").concat(card.speakerName, "</h2>\n              <h4>").concat(card.profession, "</h4>\n              <hr>\n              <p>").concat(card.discription, "</p>\n            </div>\n          </div>");
    return mainSpeaker.appendChild(speakerCard);
  });
}

function speakersTwoCards() {
  speakerTwoCard.map(function (card) {
    var speakerCard = document.createElement('div');
    speakerCard.classList.add('card');
    speakerCard.innerHTML = "\n          <div class=\"card\">\n            <img src=\"".concat(card.speakerImage, "\" alt=\"\">\n            <div class=\"content\">\n              <h2>").concat(card.speakerName, "</h2>\n              <h4>").concat(card.profession, "</h4>\n              <hr>\n              <p>").concat(card.discription, "</p>\n            </div>\n          </div>");
    return mainSpeaker.appendChild(speakerCard);
  });
}

var button = document.getElementById('seeMore'); // button.addEventListener('click', speakersCards());

if (window.innerWidth <= 768) {
  speakersTwoCards();
} else {
  speakersCards();
}