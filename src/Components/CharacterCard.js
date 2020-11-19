import React from "react"


class CharacterCard extends React.Component {

    render() {
        return (
            <div class="char-card">
                <h2>{this.props.character.name}</h2>
                <img class="char-img" alt={this.props.character.name} src={this.props.character.img} />
            </div>
        )
    }

} 

export default CharacterCard