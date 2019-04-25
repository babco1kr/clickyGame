import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar";
import ImageCard from "./components/imageCard/imageCards";
import photos from "./photos.json";


const styles = {
  flex: {
    display: "flex",
    flexWrap: "wrap"
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
}
}

class App extends Component {

  state = {
    photos,
    clickCount: 0,
    highScore: 0,
    clicked: []
  }

  // Function to shuffle all photos in the array
  shuffle = (photos) => {
    let i = photos.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = photos[i];
        photos[i] = photos[j];
        photos[j] = temp;
    }
    this.setState({photos})
}

clickPhoto = id => {
  let clicked = this.state.clicked;
  let clickCount = this.state.clickCount;
  let highScore = this.state.highScore;
  const element = document.getElementById("imageArea");
  // Checks to see if item has been clicked before
  if (clicked.includes(id) === false) {
    element.classList.remove("shake");
    clicked.push(id);
    clickCount++;
    // Updates current score and checks to see if its the new High Score
    if (clickCount > highScore) {
      highScore = clickCount;
      this.setState({highScore});
    }
    this.setState({clickCount});
    this.setState({clicked});
    this.shuffle(this.state.photos);
  } else {
    // Restars the game, reseting all values
    element.classList.add("shake");
    clickCount = 0;
    this.setState({clickCount});
    console.log("game over");
    this.shuffle(this.state.photos);
    clicked = [];
    this.setState({clicked});
    console.log(clicked);
  }
}


  render() {
  return (
    <div>
    <NavBar 
    highScore = {this.state.highScore}
    clickCount = {this.state.clickCount}
    />
    <div style={styles.flex} className = "container">
    <div id = "imageArea" style = {styles.imageContainer}>
    {this.state.photos.map(photo => (
    <ImageCard 
    key = {photo.id}
    id = {photo.id}
    image = {photo.image}
    clickPhoto = {this.clickPhoto}
    />
    ))}
    </div>
    </div>
    </div>
  )
}
}

export default App;
