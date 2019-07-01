import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {

    function getStyle() {
        return {
            textDecoration: props.todo.completed ?
            'line-through' : 'none',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    const { id, title } = props.todo
    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={props.markComplete.bind(this, id)} /> {' '}
                {title}
                <button onClick={props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
    );
}

//PropTypes
TodoItem.propsTypes = {
    todo: PropTypes.object
}

const btnStyle = {
    background: '#f22',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
