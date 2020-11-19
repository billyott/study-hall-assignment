import React from "react"

function SearchForm(props) {

    return (
        <div>
            <h2>Search Character</h2>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="character name" value={props.searchValue} onChange={props.searchHandler} />
            </form>
            <br />
        </div>
    )

}

export default SearchForm