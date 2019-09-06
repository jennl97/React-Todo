import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state = {
            todoItem: ""
        };
    }

    handleChanges = e => {
        this.setState({todoItem: e.target.value});
    }

    handleSubmit = e => {
        this.props.addTodo(e, this.state.todoItem);
        this.setState({todoItem: ""});
    }

    render(){
        return(
            <form>
                <input
                type="text"
                name="todo"
                onChange={this.handleChanges}
                />
            <button onClick={this.props.addTodo}>Add Todo</button>
            <button onClick={this.props.clearTodo}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;