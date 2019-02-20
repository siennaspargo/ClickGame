import React, { Component } from "react";
import CandyCard from "./components/CandyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import candies from "./candies.json";
import Footer from "./components/footer";
import Score from "./components/score";
import Message from "./components/Instructions";

// state
class App extends Component {
  // Setting this.state.candies to the candies json array
  state = {
    candies,
    yourScore: 0,
    highScore: 0,
    clickedCandies: []
  };

onClickImg = id => {
    // Filter this.state.candies for candies with an id not within the clicked character array
  //   if (this.state.candies.map(id) === -1) {
  //     this.countScore();
      
  //     this.setState({ clickedCandies: 

  //       // return a new array //
  //       this.state.clickedCandies.concat(id) });
  //   } else {
  //     alert("You already clicked that one!")
  //   this.resetGame();
  // }
  // once i click on an image, i want to push that id of that specific image to the clicked character array
  
if (this.state.clickedCandies.includes(id)) {
  alert("You already clicked that one!")
    this.resetGame();

} else {

  alert("nice memory")
  
  // this.resetGame();
  // also, on click, i want to shuffle the cards positions on the page 

  // update the score 


  // push to clickedCandies array
this.state.clickedCandies.push(id)

  // alert("click")

};
}

countScore = () => {
  const newScore = this.state.yourScore + 1;
  this.setState({
      yourScore: newScore
  });

  if (newScore === this.state.highScore) {
    this.setState({ highScore: newScore });
}
if (newScore === 12) {
    alert("You've got a good memory!")
    this.resetGame();
};
}

resetGame = () => {
  this.setState({
      yourScore: 0,
      highScore: this.state.highScore,
      clickedCandies: []
  });
};

  // Map over this.state.candies and render a CandyCard component for each friend object
render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <Score>         
            Your Score : {this.state.yourScore}
            <br></br>
            ~~~~~~~~~~~~~~
            <br></br>
            High Score : {this.state.highScore} 
        </Score>

        <Message>
          Don't lick... oops, I mean click the candy more than once and try to reach 12 points.
        </Message>
        
        {this.state.candies.map(friend => (
          <CandyCard
            onClickImg={this.onClickImg}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}

        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
