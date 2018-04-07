import React, { Component } from 'react';
import Score from './components/Score';
import Characters from './components/Characters';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import characters from './characters.json';

class App extends Component {
  // set the state for the app
  state = {
    characters: characters,
    wasClicked: [],
    score: 0,
    topScore: 0,
    message: "Click and image to begin!"
  };

  // shuffle array everytime an img is clicked
  shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // function that will run everytime an img is clicked
  getId = (id, clicked) => {
    // load the score state into a variable
    const currentScore = this.state.score
    // load the top score into a variable
    let top = this.state.topScore
    // if the players current score is greater than the current top score, top will equal the current score
    if (currentScore > this.state.topScore) {
      top = currentScore;
    }
    // if img has not been clicke run the following 
    if(clicked === "false"){
      // map over characters and change the matching img id to true
      const clicked = this.state.characters.map(character =>{
        if(character.id === id){
          character.clicked = "true";
          // change state of clicked on matching character id
          this.setState({ clicked });
          const goShuffle = this.shuffle(this.state.characters)
          // change state to shuffle characters, update score, and message
          this.setState({ 
            characters: goShuffle,
            score: this.state.score + 5,
            message: "You guessed correctly!"
          });
        }
      })
    }else{
      // map over all characters and change clicked state back to false
      const rest = this.state.characters.map(character =>{
        character.clicked = "false";
        // rest the state
        this.setState({rest});
        this.setState({
          score: this.state.score = 0,
          message: "You guessed incorrectly! :(",
          topScore: top
        });
      })
    }
    console.log(this.state.characters)
  
  };


  render() {
    return (
      <div>
        <Score
         message={this.state.message}
         score={this.state.score}
         topScore={this.state.topScore}
        />
        <Header/>
        <Wrapper>
        {this.state.characters.map(character => ( 
          <Characters
            onClick={this.getId}
            image={character.image}
            name={character.name}
            id={character.id}
            key={character.id}
            clicked={character.clicked}
          />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
