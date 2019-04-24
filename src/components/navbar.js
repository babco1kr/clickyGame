import React from "react";

const styles = {
    navBar: {
        color: "grey"
    },
    scores: {
        justifyContent: "right"
    }
}
function NavBar(props) {
    return (
        <nav style ={styles.navBar} className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span style = {styles.scores} id = "scores">Current Score: {props.clickCount} | High Score: {props.highScore}</span>
        </nav>
    )
}

export default NavBar;