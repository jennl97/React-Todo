import React from 'react';

//import component
import Todo from './Todo';

let TodoList = props => {
    return (
        <div>
            {props.todoList.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;