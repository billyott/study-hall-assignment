import React from "react"

function SearchForm(props) {

    return (
        <div>
            <h2>Search Character</h2>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="character name" value={props.searchValue} onChange={props.searchHandler} />
                <select onChange={props.dropDownHandler}>
                    <option selected disabled value=''>-- select show --</option>
                    {props.shows.map(show => <option value={show}>{show}</option>)}
                </select>
            </form>
            <br />
        </div>
    )

}

export default SearchForm