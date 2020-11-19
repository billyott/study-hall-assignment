import React from "react"

class SearchForm extends React.Component {

    state = {
        val: ''
    }


    render() {
        return (
            <div>
                <h2>Search Character</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="character name" value={this.props.searchValue} onChange={this.props.searchHandler} />
                </form>
                <br />
            </div>
        )
    }

}

export default SearchForm