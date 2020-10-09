import React from 'react';

interface Props{
    todo: Todo;
    toggleTodo: ToggleTodo;
}

//exports a constant TodoListItem typed Prop which is set by the following function
export const TodoListItem: React.FC<Props>  = ({todo, toggleTodo}) => {
    return(<li>
        <label style={{ textDecoration: todo.complete ? 'line-through' : undefined}}>
            <input 
            type="checkbox" 
            checked={todo.complete} 
            onClick={()=>{
                toggleTodo(todo);
            }}
            />{' '} 
            {todo.text}
        </label>
        </li>
        ); 
};