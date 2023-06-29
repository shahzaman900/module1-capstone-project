"use strict";

var speakers = [{
  speakerImage: './images/speaker_01.png',
  speakerName: 'David Fitch',
  profession: 'Storyteller Panel:',
  discription: 'Karen Wilk , David Lundberg, Taehoo Lee6'
}, {
  speakerImage: './images/speaker_02.png',
  speakerName: 'Rachel Beveridge',
  profession: 'Storyteller Panel:',
  discription: 'Sebastian Maldonado, Kurt Rietema, Sparrow Etter Carlson'
}, {
  speakerImage: './images/speaker_03.png',
  speakerName: 'John Eigege',
  profession: 'Storyteller Panel:',
  discription: 'Szabina Sztojka, Andrew Beunk, Laura Osborne'
}, {
  speakerImage: './images/speaker_04.png',
  speakerName: 'Ruth Padilla-DeBorst',
  profession: 'Storyteller Panel:',
  discription: 'Mario Matos, John Lee, David Kromminga'
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
    speakerCard.innerHTML = "\n          <div class=\"card\">\n            <img src=\"".concat(card.speakerImage, "\" alt=\"\">\n            <div class=\"content\">\n              <h2>").concat(card.speakerName, "</h2>\n              <hr>\n              <h4>").concat(card.profession, "</h4>\n              <p>").concat(card.discription, "</p>\n            </div>\n          </div>");
    return mainSpeaker.appendChild(speakerCard);
  });
}

var button = document.getElementById('seeMore'); // button.addEventListener('click', speakersCards());

if (window.innerWidth <= 768) {
  speakersTwoCards();
} else {
  speakersCards();
}