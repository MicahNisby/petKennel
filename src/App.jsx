import { Component } from "react";
import petsData from "./data";
import ChildComponent from "./ChildComponent";

class App extends Component {
  constructor() {
    super();
    // Step 3.1 — Initialize state
    this.state = {
      pets: petsData
    };
  }

  // Step 3.2 — Toggle mood
  toggleMood = (id) => {
    const updatedPets = this.state.pets.map((pet) => {
      if (pet.id === id) {
        return {
          ...pet,
          isHappy: !pet.isHappy,
          image: pet.isHappy ? "sad.png" : "happy.png"
        };
      }
      return pet;
    });
    this.setState({ pets: updatedPets });
  };

  // Step 3.3 — Feed / Remove treat
  feedTreat = (id) => {
    const updatedPets = this.state.pets.map((pet) => {
      if (pet.id === id) {
        return {
          ...pet,
          hasTreat: !pet.hasTreat,
          isHappy: true, // pet becomes happy when given a treat
          image: "happy.png"
        };
      }
      return pet;
    });
    this.setState({ pets: updatedPets });
  };

  // Step 3.4 — Render pets
  render() {
    return (
      <div>
        <h1>Pet Kennel</h1>
        {this.state.pets.map((pet) => (
          <ChildComponent
            key={pet.id}
            pet={pet}
            toggleMood={this.toggleMood}
            feedTreat={this.feedTreat}
          />
        ))}
      </div>
    );
  }
}

export default App;