import React from 'react';
import Todoitem from './Todoitem.js';
import PropTypes from 'prop-types';

function Todos(props) {

    return (
        props.todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo}/>
        ))
    );
}

//PropTypes
Todos.propsTypes = {
    todos: PropTypes.array
}

export default Todos;
