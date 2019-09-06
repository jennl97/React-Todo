import React from 'react';

//import component
import Todo from './Todo';

let TodoList = props => {
    return (
        <div>
            {props.todoList.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}/>
            ))}

            <button onClick={props.clearTodo}>Clear Completed</button>
        </div>
    );
};

export default TodoList;