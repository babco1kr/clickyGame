import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar";
import ImageCard from "./components/imageCards";
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
  const clicked = this.state.clicked;
  console.log(clicked[id]);
  if (clicked[id] === -1) {
    clicked.push(id);
    this.setState({clicked});
    this.shuffle(this.state.photos);
  } else {
    console.log("game over");
    this.shuffle(this.state.photos);
  }
}


  render() {
  return (
    <div>
    <NavBar />
    <div style={styles.flex} className = "container">
    <div style = {styles.imageContainer}>
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
