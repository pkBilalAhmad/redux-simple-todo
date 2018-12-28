import React from 'react';
import { connect } from 'react-redux'


class TodoItem extends React.Component {
    addTodo(e) {
        e.preventDefault();
        let input = this.refs.input;
        if(!input.value) return false;
        this.props.addTodoAction(input.value);
        input.value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo.bind(this)}>
                    <input type='text' ref='input' />
                    <button type='submit'>Add Todo</button>
                </form>
                <ul>
                    {
                        this.props.data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapDispatch = (disp) => {
    return {
        addTodoAction: (user) => {
            console.log(user)
            const action = {
                type: 'TODO',
                user
            }; disp(action)
        }
    }
}

const mapState = (state) => {
    // console.log(state.data)
    return {
        data: state.data
    }
}



export default connect(mapState, mapDispatch)(TodoItem);