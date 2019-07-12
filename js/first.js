

let suit = ["spades", "diamonds", "clubs", "hearts"];
let value = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let deck = [];


 function newDeck(suit, value) {
   let arr = [];
   for(let i= 0; i < suit.length; i++) {
     for(let j = 0; j < value.length; j++) {
       arr.push({suit: suit[i], value: value[j]});
     }
   }
   deck = arr;
 }
 function shuffle() {
   // https://bost.ocks.org/mike/shuffle/
   var m = deck.length, t, i;

   // While there remain elements to shuffle…
   while (m) {

     // Pick a remaining element…
     i = Math.floor(Math.random() * m--);

     // And swap it with the current element.
     t = this.deck[m];
     deck[m] = this.deck[i];
     deck[i] = t;
   }
   return deck;
 }


