import React from "react";
import "./Characters.css";

const Characters = props => (
    
        <div className="col-sm-3">
            <span onClick={() => props.onClick(props.id, props.clicked)}>
            <img className="char-img" src={props.image} alt={props.name} name={props.name}/>
            </span>    
        </div>         
);

export default Characters;