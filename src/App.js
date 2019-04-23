import React from 'react';
import './App.css';
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
  <div style={styles.flex} className = "container">
    <ImageCard photos = {photos} />
  </div>
  )
}

export default App;
