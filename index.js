let Information = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : Information.name + " from " + Information.campus,
    e : "oO",
    T : "U "
}));
