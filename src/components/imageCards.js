import React from "react";

const styles = {
    images: {
        width: "185px",
        height: "185px"
    },
    imageHolder: {
        width: "200px",
        margin: "10px 25px"
    },
    imageContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
};

function ImageCard(props) {
    return (
        <div style= {styles.imageContainer}>
        {props.photos.map(photo =>
        <div style={styles.imageHolder}>
        <img id = {photo.id} style = {styles.images} className = "thumbnail" src = {photo.image} alt = ""></img>
        </div>   
            )}
        </div>
    )
}

export default ImageCard;