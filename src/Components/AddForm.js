import React from "react"

class AddForm extends React.Component {

    render() {
        return (
            <div>
                <h2>Add Character</h2>
                <form>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="show" />
                    <input type="text" placeholder="image" />
                </form>
                <br />
            </div>
        )
    }
}

export default AddForm