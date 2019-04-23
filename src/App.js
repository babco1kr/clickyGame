import React from 'react';
import './App.css';
import NavBar from "./components/navbar";
import ImageCard from "./components/imageCards";
import photos from "./photos.json";


const styles = {
  flex: {
    display: "flex",
    flexWrap: "wrap"
  }
}

function App() {
  return (
    <div>
    <NavBar />
    <div style={styles.flex} className = "container">
    <ImageCard photos = {photos} />
  </div>
  </div>
  )
}

export default App;
