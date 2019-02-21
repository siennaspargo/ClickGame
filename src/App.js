import React, {
  Component
} from "react";
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

    // once i click on an image, i want to push that id of that specific image to the clicked character array

    if (this.state.clickedCandies.includes(id)) {
      alert("You already clicked that one!")
      let highScore = this.state.highscore;
      if (this.state.score > this.state.highscore) {
        highScore = this.state.score;
        this.setState({
          score: 0,
          highscore: highScore
        });
      } else {
        let score = this.state.score;
        score = score + 1;
        this.setState({
          score: score
        });
        alert("nice memory")
      }
    } else {

      // Filter this.state.candies for candies with an id not within the clicked candie array
      this.state.clickedCandies.push(this.state.candies.filter(candies => candies.id === id));

      // Set this.state.candies equal to the new candies array
      const candies = this.state.candies;


      // also, on click, i want to shuffle the cards positions on the page 
      for (let x = candies.length - 1; x > 0; x--) {
        const y = Math.floor(Math.random() * (x + 1));
        // destructure the candies for the state
        [candies[x], candies[y]] = [candies[y], candies[x]];
      }
      // set rearranged candies to the state
      this.setState({
        candies: candies
      });
      // update the score 
      this.countScore();

      // push to clickedCandies array
      this.state.clickedCandies.push(id)


    }

  };


  countScore = () => {

    const newScore = this.state.yourScore + 1;
    this.setState({
      yourScore: newScore
    });

    if (newScore === this.state.highScore) {
      this.setState({
        highScore: newScore
      });
    }
    if (newScore === 12) {
      alert("You've got a good memory")
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

  render = () => {
    // Map over this.state.candies and render a CandyCard component for each friend object
    return (< Wrapper >
      <Title > Memory Game </Title>

      < Score >
        Your Score: {
          this.state.yourScore
        }
        <br />~~~~~~~~~~~~~~
      <br />
        High Score: {
          this.state.highScore
        }
      </Score>
      <Message >
        Don 't lick... oops, I mean click the candy more than once and try to reach 12 points.
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
      <Footer />
    </Wrapper>
    )
  }
}

export default App;