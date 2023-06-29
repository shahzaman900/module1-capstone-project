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
var mainSpeaker = document.getElementById('speaker-cards');

function speakersCards() {
  var noOfSpeakers = 0;

  if (window.innerWidth <= 768) {
    noOfSpeakers = 2;
  } else if (window.innerWidth > 768) {
    noOfSpeakers = speakers.length;
  }

  console.log(speakers.length);
  var speakerCard = document.createElement('div');
  speakerCard.classList.add('card');

  for (var i = 0; i < noOfSpeakers; i++) {
    // speakers.map((card) => {
    console.log(speakers[i]);
    speakerCard.innerHTML = "\n            <div class=\"card\">\n              <img src=\"".concat(speakers[i].speakerImage, "\" alt=\"\">\n              <div class=\"content\">\n                <h2>").concat(speakers[i].speakerName, "</h2>\n                <h4>").concat(speakers[i].profession, "</h4>\n                <hr>\n                <p>").concat(speakers[i].discription, "</p>\n              </div>\n            </div>"); // })
  }

  return mainSpeaker.appendChild(speakerCard);
}

speakersCards();