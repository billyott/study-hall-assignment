import React from "react"
import './App.css';

import CharactersContainer from './Containers/CharactersContainer'


class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <CharactersContainer />
      </div>
    )
  }
}

export default App;
