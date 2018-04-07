import React from "react";
import "./Score.css";

const Score = props => <nav className="navbar">
                            <h2 className="text-left logo">Clicky Game</h2>
                            <h3 className="text-center message">{props.message}</h3>
                            <h3 className="text-left score">Your Score: {props.score} | Top Score: {props.topScore}</h3>
                        </nav>

export default Score; 