
let speakers = [
  {
    speakerImage: './images/speaker_01.png',
    speakerName: 'Shah Zaman',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {
    speakerImage: './images/speaker_01.png',
    speakerName: 'Shah Zaman',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {
    speakerImage: './images/speaker_01.png',
    speakerName: 'Shah Zaman',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {
    speakerImage: './images/speaker_01.png',
    speakerName: 'Shah Zaman',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {
    speakerImage: './images/speaker_01.png',
    speakerName: 'Shah Zaman',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    discription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
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
          </div>`
    return mainSpeaker.appendChild(speakerCard);

  })
}
speakersCards();