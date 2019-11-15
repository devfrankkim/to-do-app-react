import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todos, onRemove}){
    // props로 받아온 , onRemove 배열을, 배열 내장 함수인 map을 이용하여 TodoListItem으로 이루어진 배열로 변환하여 렌더링 함.

    return(
        <div className="todolist">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>
            ))}

        </div>
    )
}

export default TodoList;