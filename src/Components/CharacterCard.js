import React from "react"


function CharacterCard(props) {

    return (
        <div className="char-card">
            <h2>Name: {props.character.name}</h2>
            <h3>From: {props.character.show}</h3>
            <img className="char-img" alt={props.character.name} src={props.character.img} />
        </div>
    )

} 

export default CharacterCard