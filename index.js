/*
This final JavaScript project is an automated version of the classic card game WAR.  
- As a part of this assignment, you will also be asked to consider:
-- Creating classes such as Card, Deck & Player
-- Keeping in mind what fields and methods each class might have.

- The completed project will do the following:

-- Deal 26 Cards to 2 Players from a Deck
-- Iterate through the turns where each Player plays a Card
--- Award a point to the Player with the higher Card
--- Ties result in zero points for both Players
-- After all cards have been played, display the score and declare the winner.
 */

const SUITS = ['♠', '♣', '♥', '♦']; //Create Array for suits in deck

const VALUES = [
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
  ['7', 7],
  ['8', 8],
  ['9', 9],
  ['10', 10],
  ['Jack', 11],
  ['Queen', 12],
  ['King', 13],
  ['Ace', 14],
]; //Create values for cards in the deck

//create array to hold suite and values together
function freshDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.flatMap((value) => {
      return new Card(suit, value);
    });
  });
}

// create a class call deck to hold, the deck, shuffle
class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }
  // create a method to shuffle the cards
  shuffle() {
    this.cards.sort((a, b) => Math.random() - 0.5);
  }
}

// create a class to hold the cards
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
//global variables for player 1 decks and scores
let player1Deck;
let player2Deck;

let player1score = 0;
let player2score = 0;

//function to start the game and run the program

function startGame() {
  let player1 = prompt(`Enter Player One's Name:`);
  let player2 = prompt(`Enter Player Two's Name:`);
  const deck = new Deck();
  deck.shuffle();
  const deckMidpoint = deck.cards.length / 2;
  player1Deck = new Deck(deck.cards.slice(0, deckMidpoint));
  player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.cards.length));

  console.log(player1Deck);
  console.log(player2Deck);

  const FINALSCORE = document.querySelector('#score');
  //function to log to the console what is acutally going on
  function logGame(points) {
    console.log(`
      Round: ${[i + 1]} 
      ${player1}'s Card: ${player1Deck.cards[i].value[0]} of ${
      player1Deck.cards[i].suit
    }
      ${player2}'s Card: ${player2Deck.cards[i].value[0]} of ${
      player2Deck.cards[i].suit
    }

           * ${points} *
       ---------------------------------
        Score (${player1}: ${player1score}  ${player2}: ${player2score})
       ---------------------------------
      `);
  }

  for (i = 0; i < player1Deck.cards.length; i++) {
    if (player1Deck.cards[i].value[1] > player2Deck.cards[i].value[1]) {
      player1score += 1;
      logGame(`${player1} Gets 1 Point`);
    } else if (player2Deck.cards[i].value[1] > player1Deck.cards[i].value[1]) {
      player2score += 1;
      logGame(`${player2} Gets 1 Point`);
    } else {
      logGame('Tie');
    }
  }
  if (player1score > player2score) {
    FINALSCORE.innerHTML = `<h3>
        ${player1} wins: ${player1score} to ${player2score}
      </h3>`;
  } else if (player2score > player1score) {
    FINALSCORE.innerHTML = `<h3>
        ${player2} wins: ${player2score} to ${player1score}
      </h3>`;
  } else {
    FINALSCORE.innerHTML = `Tie Game: ${player1score} to ${player2score}`;
  }
  //This is to reset score to zero when starting a new game without refreshing the page
  player1score = 0;
  player2score = 0;
}
