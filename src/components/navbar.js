import React from "react";

const styles = {
    navBar: {
        color: "grey"
    },
    scores: {
        justifyContent: "right"
    }
}
function NavBar() {
    return (
        <nav style ={styles.navBar} className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span style = {styles.scores} id = "currentScore">Current Score: </span>
        <span style = {styles.scores} id = "highScre">High Score: </span>
        </nav>
    )
}

export default NavBar;