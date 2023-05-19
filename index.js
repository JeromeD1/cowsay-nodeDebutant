const moi = require("./information");

// console.log(moi);

let cowsay = require("cowsay");
console.log(cowsay.say({
    "text": moi.nom,
    "e": "$$",
    "T": "W"
}));