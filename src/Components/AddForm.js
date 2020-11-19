import React from "react"

class AddForm extends React.Component {

    state = {
        name: '',
        show: '',
        img: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render () {
        return (
            <div>
                <h2>Add Character</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.submitHandler({
                        name: e.target.name.value,
                        show: e.target.show.value,
                        img: e.target.img.value
                    })
                }}>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.changeHandler} />
                    <input type="text" name="show" placeholder="show" value={this.state.show} onChange={this.changeHandler} />
                    <input type="text" name="img" placeholder="image" value={this.state.img} onChange={this.changeHandler} />
                    <input type="submit" value="add character" />
                </form>
                <br />
            </div>
        )
    }
}

export default AddForm