import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Footer from "./components/footer";
import Score from "./components/score";
import Message from "./components/Instructions";

// state
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    yourScore: 0,
    highScore: 0,
    clickChar: []
  };

onClickImg = id => {
    // Filter this.state.friends for friends with an id not within the clicked character array
  //   if (this.state.friends.map(id) === -1) {
  //     this.countScore();
      
  //     this.setState({ clickChar: 

  //       // return a new array //
  //       this.state.clickChar.concat(id) });
  //   } else {
  //     alert("You already clicked that one!")
  //   this.resetGame();
  // }
  // once i click on an image, i want to push that id of that specific image to the clicked character array
  
if (this.state.clickChar.includes(id)) {
  alert("You already clicked that one!")
    this.resetGame();

} else {

  alert("nice memory")
  
  // this.resetGame();
  // also, on click, i want to shuffle the cards positions on the page 

  // update the score 


  // push to clickChar array
this.state.clickChar.push(id)

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
      clickChar: []
  });
};

  // Map over this.state.friends and render a FriendCard component for each friend object
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
        
        {this.state.friends.map(friend => (
          <FriendCard
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
