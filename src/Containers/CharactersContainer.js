import React from "react"
import characters from "../api"

import CharacterCard from '../Components/CharacterCard'

class CharactersContainer extends React.Component {

    state = {
        characters: characters 
    }

    renderCharacters = () => {
        return this.state.characters.map(charObj => <CharacterCard key={charObj.name} character={charObj}/>)
    }

    render() {
        return (
            <div>
                <h1>Characters</h1>
                {this.renderCharacters()}
            </div>
        )
    }

}

export default CharactersContainer