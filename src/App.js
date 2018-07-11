import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function generateDeck() {
    // return an array of card objects, where each card has "symbol" and "isFlipped"
    var symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
    var deck = [];

    for (var i=0; i<16; i++) {
        deck.push({
            symbol: symbols[i%8],
            isFlipped: false
        });
    }

    shuffle(deck);

    return deck;
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            deck: generateDeck(),
            pickedCards: []
        };
    }

    pickCard(cardIndex) {
        let newDeck = this.state.deck.map(card => {
            return {...card}
        });
        newDeck[cardIndex].isFlipped = true;

        let newPickedCards = this.state.pickedCards.concat(cardIndex);

        if (newPickedCards.length == 2) {
            var card1Index = newPickedCards[0];
            var card2Index = newPickedCards[1];
            var card1 = newDeck[card1Index];
            var card2 = newDeck[card2Index];
            if ( card1.symbol !== card2.symbol ) {
                setTimeout(()=>{
                    this.unflipCards(card1Index, card2Index);
                }, 1000 );
            }
            newPickedCards = [];
        }

        this.setState({
            deck: newDeck,
            pickedCards: newPickedCards
        });
    }

    unflipCards(card1Index, card2Index) {
        let newDeck = this.state.deck.map(card => {
            return {...card}
        });

        newDeck[card1Index]
    }

    render() {
        var cardsJSX = this.state.deck.map((card) => {
            return <MemoryCard  symbol={card.symbol}
                                isFlipped={card.isFlipped}
                                pickCard={this.pickCard.bind(this, index)}/>
            });

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Memory Game</h1>
                    <h3 className="App-subtitle">Match cards to win</h3>
                </header>

                <div>
                    {cardsJSX.slice(0,4)}
                </div>
                <div>
                    {cardsJSX.slice(4,8)}
                </div>
                <div>
                    {cardsJSX.slice(8,12)}
                </div>
                <div>
                    {cardsJSX.slice(12,16)}
                </div>
            </div>
        )
        };
}

export default App;
