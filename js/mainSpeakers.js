const speakers = [
  {
    speakerImage: './images/speaker_01.png',
    speakerName: 'David Fitch',
    profession: 'Storyteller Panel:',
    discription: 'Karen Wilk , David Lundberg, Taehoo Lee6',
  },
  {
    speakerImage: './images/speaker_02.png',
    speakerName: 'Rachel Beveridge',
    profession: 'Storyteller Panel:',
    discription: 'Sebastian Maldonado, Kurt Rietema, Sparrow Etter Carlson',
  },
  {
    speakerImage: './images/speaker_03.png',
    speakerName: 'John Eigege',
    profession: 'Storyteller Panel:',
    discription: 'Szabina Sztojka, Andrew Beunk, Laura Osborne',
  },
  {
    speakerImage: './images/speaker_04.png',
    speakerName: 'Ruth Padilla-DeBorst',
    profession: 'Storyteller Panel:',
    discription: 'Mario Matos, John Lee, David Kromminga',
  },
  {
    speakerImage: './images/speaker_04.png',
    speakerName: 'Ruth Padilla-DeBorst',
    profession: 'Storyteller Panel:',
    discription: 'Mario Matos, John Lee, David Kromminga',
  },
  {
    speakerImage: './images/speaker_04.png',
    speakerName: 'Ruth Padilla-DeBorst',
    profession: 'Storyteller Panel:',
    discription: 'Mario Matos, John Lee, David Kromminga',
  },
];

const speakerTwoCard = [
  {
    speakerImage: './images/speaker_01.png',
    speakerName: 'Shah Zaman',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    speakerImage: './images/speaker_01.png',
    speakerName: 'Shah Zaman',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

const mainSpeaker = document.getElementById('speaker-cards');

function speakersCards() {
  speakers.map((card) => {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('card');

    speakerCard.innerHTML = `
          <div class="card">
            <img src="${card.speakerImage}" alt="">
            <div class="content">
              <h2>${card.speakerName}</h2>
              <h4>${card.profession}</h4>
              <hr>
              <p>${card.discription}</p>
            </div>
          </div>`;
    return mainSpeaker.appendChild(speakerCard);
  });
}

function speakersTwoCards() {
  speakerTwoCard.map((card) => {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('card');

    speakerCard.innerHTML = `
          <div class="card">
            <img src="${card.speakerImage}" alt="">
            <div class="content">
              <h2>${card.speakerName}</h2>
              <hr>
              <h4>${card.profession}</h4>
              <p>${card.discription}</p>
            </div>
          </div>`;
    return mainSpeaker.appendChild(speakerCard);
  });
}

if (window.innerWidth <= 768) {
  speakersTwoCards();
} else {
  speakersCards();
}
