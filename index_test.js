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
});
