require('../config/mongoose-setup');

const PortafolioModel = require('../models/portafolio-model');

const portafolioInfo = [
  {
    name: "Inspired",
    description: `Inspired is a personal tool I created to help myself keep organized
    with my schedule. It is my personalized virtual assistant/portafolio. People
    are able to see my availbale times and schedule meetings through Inspired and even
    add a message with the purpose of the meetign`
  },
  {
    name: "ChemGame",
    url: "https://aromanarguello.github.io/chemgame/index.html",
    description: `ChemGame is an interactive game to learn and
    practice the Periodic Table. It features multiplayer mode.`,
    img: "./public/images/chemgame.png"
  },
  {
    name: "VitaHelp",
    url: "https://vitaclinic.herokuapp.com/",
    description: `Vitahelp is designed to help chronic opioid users
    find near by rehabilittion centers. Adittionally they can create accounts
    and post in a message board to review different centers based on personal
    experience. Version 2 will feature a buddy-mentor system.`,
    img: "../public/images/vitahelp.png"
  }
];

PortafolioModel.create(portafolioInfo)
.then( portafolioResults => {
  console.log(portafolioResults);
})
.catch( err => {
  console.log( err );
});
