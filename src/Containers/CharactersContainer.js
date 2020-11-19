import React from "react"
import characters from "../api"

import CharacterCard from '../Components/CharacterCard'
import AddForm from '../Components/AddForm'
import SearchForm from '../Components/SearchForm'

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
                <AddForm />
                <SearchForm />
                <div className="char-card-container">
                    {this.renderCharacters()}
                </div>
            </div>
        )
    }

}

export default CharactersContainer