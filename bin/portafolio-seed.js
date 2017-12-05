require('../config/mongoose-setup');

const PortafolioModel = require('../models/portafolio-model');

const portafolioInfo = [
  {
    name: "Inspired",
    description: `Inspired is my virtual personal assistant/portafolio. Inspired helps me keep
    my schedule organized, and it allows me to show-case what I have created thus far`,
    img: "https://github.com/aromanarguello/inspired/blob/master/public/images/inspired.png?raw=true"
  },
  {
    name: "ChemGame",
    url: "https://aromanarguello.github.io/chemgame/index.html",
    description: `ChemGame is an interactive game to learn and
    practice the Periodic Table. It features multiplayer mode.`,
    img: "https://github.com/aromanarguello/inspired/blob/master/public/images/chemgame.png?raw=true"
  },
  {
    name: "VitaHelp",
    url: "https://vitaclinic.herokuapp.com/",
    description: `Vitahelp is designed to help chronic opioid users
    find near by rehabilittion centers. Adittionally they can create accounts
    and post in a message board to review different centers based on personal
    experience. Version 2 will feature a buddy-mentor system.`,
    img: "https://github.com/aromanarguello/inspired/blob/master/public/images/vitahelp.png?raw=true"
  }
];

PortafolioModel.create(portafolioInfo)
.then( portafolioResults => {
  console.log(portafolioResults);
})
.catch( err => {
  console.log( err );
});
