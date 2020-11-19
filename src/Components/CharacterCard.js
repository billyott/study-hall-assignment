import React from "react"


class CharacterCard extends React.Component {

    render() {
        return (
            <div className="char-card">
                <h2>Name: {this.props.character.name}</h2>
                <h3>From: {this.props.character.show}</h3>
                <img className="char-img" alt={this.props.character.name} src={this.props.character.img} />
            </div>
        )
    }

} 

export default CharacterCard