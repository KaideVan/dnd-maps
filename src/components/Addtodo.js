import React from 'react';

class Addtodo extends React.Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState(
        {
            [e.target.name]: e.target.value
        }
    );

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);   // call the addtodo function from app js
        this.setState({ title: ''});            // now make the form empty again 
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex' }}>
                <input
                    style={{ flex: '10', padding: '5px'}}
                    type="text"
                    name="title"
                    placeholder="Add to do..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        );
    }
}

export default Addtodo;
