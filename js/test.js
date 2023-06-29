
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
  let noOfSpeakers = 0;
  if (window.innerWidth <= 768) {
    noOfSpeakers = 2
  } else if (window.innerWidth > 768) {
    noOfSpeakers = speakers.length
  }

  console.log(speakers.length);
  const speakerCard = document.createElement('div');
  speakerCard.classList.add('card');
  for (let i = 0; i < noOfSpeakers; i++) {
    // speakers.map((card) => {
        console.log(speakers[i]);
        speakerCard.innerHTML = `
            <div class="card">
              <img src="${speakers[i].speakerImage}" alt="">
              <div class="content">
                <h2>${speakers[i].speakerName}</h2>
                <h4>${speakers[i].profession}</h4>
                <hr>
                <p>${speakers[i].discription}</p>
              </div>
            </div>`
            // })
          }
   return mainSpeaker.appendChild(speakerCard);

}
speakersCards();