import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state = {
            todoItem: ""
        };
    }

    handleChanges = e => {
        this.setState({ todoItem: e.target.value });
    }

    handleSubmit = e => {
        this.props.addTodo(e, this.state.todoItem);
        this.setState({ todoItem: "" });
    }

    
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="todo"
                value={this.state.todoItem}
                onChange={this.handleChanges}
                />
            <button>Add Todo</button>
            
            </form>
          
             
             </div>
        )
    }
}

export default TodoForm;

