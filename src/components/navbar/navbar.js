import React from "react";
import "./style.css";

const styles = {
    navBar: {
        background: "rgb(29,202,255)",
        webkitBoxShadow: "0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)",
        position: "fixed",
        width: "100%",
        minWidth: "70px"
    },
    scores: {
        justifyContent: "right"
    }
}
function NavBar(props) {
    return (
        <nav style ={styles.navBar} className="navbar">
        
        <span a href = "/" className="navbar-brand mb-0 h1">Clicky Game</span>
        <span>{props.gameStatus}</span>
        <span style = {styles.scores} id = "scores">Current Score: {props.clickCount} | High Score: {props.highScore}</span>
        </nav>
    )
}

export default NavBar;