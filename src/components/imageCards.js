import React from "react";

const styles = {
    images: {
        width: "185px",
        height: "185px"
    },
    imageHolder: {
        width: "200px",
        margin: "10px 25px"
    }
};

function ImageCard(props) {
    return (
        <div style={styles.imageHolder}>
        <img style = {styles.images} className = "thumbnail" src = {props.image} alt = ""
        onClick={() => props.clickPhoto(props.id)}></img>
        </div>   
            
    )
}

export default ImageCard;