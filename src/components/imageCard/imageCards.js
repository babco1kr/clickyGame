import React from "react";
import "./style.css";

const styles = {
    images: {
        width: "185px",
        height: "185px",
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "#ccffff",
        boxShadow: "5px 5px #888888"
    },
    imageHolder: {
        width: "200px",
        margin: "10px 25px"
    }
    
};

function ImageCard(props) {
    return (
        <div style={styles.imageHolder}>
        <img className = "images" style = {styles.images} src = {props.image} alt = ""
        onClick={() => props.clickPhoto(props.id)}></img>
        </div>   
            
    )
}

export default ImageCard;