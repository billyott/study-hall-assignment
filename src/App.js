import React from "react"
import './App.css';

import CharactersContainer from './Containers/CharactersContainer'
import AddForm from './Components/AddForm'
import SearchForm from './Components/SearchForm'

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <h1>Character Index</h1>
        <CharactersContainer />
      </div>
    )
  }
}

export default App;
