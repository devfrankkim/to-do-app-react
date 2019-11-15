import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';

function TodoApp() {
     const [todos, setTodos] = useState([
     {
         id: 1,
         text: '리엑트의 기초 알아보기', 
         checked: true,
     },
     {
        id: 2,
        text: '컴포넌트', 
        checked: true,
    },
    {
        id: 3,
        text: '일정 관리 앱 만들어 보기', 
        checked: false,
    },
    ]);

    const nextId = useRef(4);


    // 데이터 추가하는 onInsert 함수
    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked:false
            }

            // todos 배열에, 하나의 레코드인 todo를 합치는 함수.
            setTodos(todos.concat(todo));
            nextId.current +=1 ; // nextId 1씩 증가시키기.
        }, [todos]
    );

    // 특정한 id에 해당하는 레코드를 삭제하는 함수 onRemove() 함수
    // filter() 함수는 기존의 배열은 그대로 둔 상태에서 특정 조건을 만족하는 
    // 원소들만을 따로 모아서 새로운 배열을 만드는 함수.
    // filter() 함수는 조건을 확인해 주는 함수를, 파라미터로 넣어주어야 함.

    const onRemove = useCallback(
        id=>{
            setTodos(todos.filter(todo => todo.id !== id));
        },[todos]);

    // todos 배열에 들어가 있는 객체는 각 항목의 id, text(내용), checked(완료여부 booelean-true/false)
    // 해당 배열은 TodoList 컴포넌트에 props로 전달 할 예정.
    // TodoList에서는 해당 배열을 받아서 TodoItem으로 변환해서 렌더링 되도록 설정.
    return (
        <TodoTemplate>  
            <TodoInsert onInsert={onInsert}/>   
            <TodoList todos={todos} onRemove={onRemove} />   
        </TodoTemplate> 
    );
}

export default TodoApp;