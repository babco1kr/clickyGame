import React from "react";
import "./style.css";

const styles = {
    header: {
        padding: "180px 20px"
    },
    text: {
        textAlign: "center"
    }
}

function Header() {
    return(
        <header style = {styles.header}>
            <h1 style = {styles.text}>Clicky Game!</h1>
            <h2 style = {styles.text}>Click and image to earn points, but don't click on any more than once!</h2>
        </header>
    )
}

export default Header;