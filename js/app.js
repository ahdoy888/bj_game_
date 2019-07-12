
 class Card {
   constructor(suit, value) {
     this.suit = suit;
     this.value = value;
   }
 }
//  console.log(new Card('heart', 1));

let suit = ["spades", "diamonds", "clubs", "hearts"];
let value = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];


class Deck {
  constructor() {
  this.deck = [];
  
  }

  newDeck(suit, value) {
    let arr = [];
    for(let i= 0; i < suit.length; i++) {
      for(let j = 0; j < value.length; j++) {
        arr.push({suit: suit[i], value: value[j]});
      }
    } 
    this.deck = arr;
  }
  shuffle() {
    // https://bost.ocks.org/mike/shuffle/
    var m = this.deck.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this.deck;
  } 

  deal() {
    return this.deck.pop();
  }
 
}
// Do not touch 


let gameDeck = new Deck 

gameDeck.newDeck(suit, value)
console.log(gameDeck.deck);

gameDeck.shuffle()
console.log(gameDeck.shuffle());

gameDeck.deal()
console.log(gameDeck.deck);
// Do not touch this code //


class Player {
  constructor() {
      this.hand = [];
    
  }
  totalHand(){
    let total = 0;
    this.hand.forEach(card => {
      
        total += card.value;
    })
    return total;
}

  // handValue(){
  //    let total =0;
  //     this.hand.forEach (card => {
  //         if (card.value === "J"){
  //             total =+10
  //         } else if (card.value === "Q"){
  //             total =+10
  //         } else if (card.value === "K"){
  //             total =+10
  //         } else if (card.value === "A" && Player.handValue() >= 11){
  //             total =+1
  //         }   else if(card.value === "A" && Player.handValue() <= 10){
  //             total =+11
  //         }
  //         else{
  //           //  return total =+ card.value + card.suit;
  //           return total += `${this.hand.value} + ${this.hand.suit}`;
  //         }
  //     })
  //   }
  

  
  // hit(){
  //     let total = 0;
  //     this.hand.forEach(card =>{
  //         if(player1.hand.card <= 20)
  //          return player1.deal(card)
  //          //console.log(hit(player1,));
  //     })
  //     return total;
  // }
};

class Dealer {
  constructor() {
      this.hand = [];
    
  }
  totalHand(){
    let total = 0;
    this.hand.forEach(card => {
      
        total += card.value;
    })
    return total;
}
}
class Game {
  constructor() {
    this.toPlayer = [];
    this.toDealer = [];
    this.makeADealer;
    this.makeAPlayer;
    this.makeADeck = new Deck();
    this.allCards = this.makeADeck.shuffle();
    this.count = 0;
    this.pScore = 0;
    this.dScore = 0;
  }

  play() {
    while(this.count < 4) {
      if(this.count < 2) this.toPlayer.push(this.allCards[0]);
      if(this.count >= 2) this.toDealer.push(this.allCards[0]);
      this.allCards.shift();
      this.count++;
    }

    this.makeADealer = new Dealer(this.toDealer);
    this.makeAPlayer = new Player(this.toPlayer);
  }
}

function declareScore(pScore, dScore){
  if((pScore > dScore && pScore <= 21) || dScore > 21) {
    alert('Player Wins');
  } else if((dScore > pScore && dScore <= 21) || pScore > 21) alert('Dealer Wins'); {
  } if ((dScore === pScore) && pScore <= 21) {
    alert(' hit or stand ?')
  }
}

function calculateScore() {
  let play = this.play.bind(this);
  // Initiate the game
  play();

  this.dealerScore = this.makeADealer.hand();
  this.playerScore = this.makeAPlayer.hand();

  $('#dScore').html("<div id='dScore'>" +'Dealer Score: '+this.dealerScore+ "</div>");
  $('#pScore').html("<div id='pScore'>" +'Player Score: '+this.playerScore+ "</div>");

  if(this.pScore > 21) {
    responsiveVoice.speak('Dealer Wins');
    return $('#gameResult').append('Dealer Wins');
  } else {
    if(this.dScore > 21) {
      responsiveVoice.speak('Player Wins');
      return $('#gameResult').append('Player Wins');
    }

  }
    function init() {
      const start = this.calculateScore.bind(this);
      return start();
    }
  }
  console.log(gameDeck.shuffle);