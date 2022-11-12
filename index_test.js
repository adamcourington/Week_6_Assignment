var expect = chai.expect;

describe('createTestDeck', () => {
  it('Does the deck contain 52 cards?', function (done) {
    const deck = new Deck();
    let testDeck = new Deck(deck.cards);
    let testDeckLength = testDeck.cards.length;
    console.log(testDeckLength);

    expect(testDeckLength).to.eql(52);
    done();
  });

  it('Does player deck contain 26 cards?', function (done) {
    const deck = new Deck();
    deck.shuffle();
    let testDeck = new Deck(deck.cards.length / 2);
    let testDeckAmount = testDeck.cards;
    console.log(testDeckAmount);

    expect(testDeckAmount).to.eql(26);
    done();
  });
});
