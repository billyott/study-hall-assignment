import React from "react"
import characters from "../api"

import CharacterCard from '../Components/CharacterCard'
import AddForm from '../Components/AddForm'
import SearchForm from '../Components/SearchForm'

class CharactersContainer extends React.Component {

    state = {
        characters: characters,
        searchValue: '',
        dropDownValue: ''
    }

    submitHandler = (charObj) => {
        let newChars = [...this.state.characters, charObj]
        this.setState({characters: newChars})
    }

    searchHandler = (e) => {
        this.setState({searchValue: e.target.value})
    }

    dropDownHandler = (e) => {
        this.setState({dropDownValue: e.target.value})
    }

    filteredCharacters = () => {
        return this.state.characters.filter(char => char.name.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase()))
    }

    dropDownFilteredCharacters = () => {
        return this.filteredCharacters().filter(char => char.show === this.state.dropDownValue)
    }

    renderCharacters = () => {
        if (this.state.dropDownValue === '') {
            return this.filteredCharacters().map(charObj => <CharacterCard key={charObj.name} character={charObj}/>)
        } else {
            return this.dropDownFilteredCharacters().map(charObj => <CharacterCard key={charObj.name} character={charObj}/>)
        }
    }

    showList = () => {
        return this.state.characters.map(char => char.show)
    }

    render() {
        return (
            <div>
                <AddForm submitHandler={this.submitHandler}/>
                <SearchForm dropDownHandler={this.dropDownHandler} shows={this.showList()} searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
                <div className="char-card-container">
                    {this.renderCharacters()}
                </div>
            </div>
        )
    }

}

export default CharactersContainer