import React, {useState, useCallback} from 'react';
import './TodoInsert.scss';
import {MdAdd} from 'react-icons/md';

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해서 input 태그의 상태의 관리

// const onChange = useCallback(); // 바꿀때 useCallback()
// Hooks 개념에 useCallback() 함수
// 컴포넌트가 리랜더링될 때 마다 함수를 onChange를 새로 만드는 것이 아니라, 
// => 딱 한번만 함수를 만들고, 재사용할 수 있도록 하는 개념 

// useCallback() 함수에 인자가 두 개가 설정됨.
// 1번째 인자 => 생성하고 싶은 함수를 넣는다.
// 2번째 인자 => 배열을 넣는다. 
// 이 배열은 어떤 값이 바뀌었을 때, 함수를 새로 생성하는지 명시

function TodoInsert({onInsert}){
    const [value, setValue] = useState('');
    const onChange = useCallback(e=> {
        setValue(e.target.value);
    }, []); // 바꿀때 useCallback()

    const onSubmit = useCallback(e =>{
        onInsert(value);
        setValue('');
        // onSubmit() 호출시, 브라우저에 새로고침 기능 발생이 됨.
        // 새로고침을 방지하기 위해서, 아래의 함수를 호출하면 새로고침 기능이 생기지 않는다.
        e.preventDefault();     
        // onInsert 함수에 현재 useState 에서 관리하는 value 값을 파라미터로 넣어줘서 호출.
    }, [onInsert, value]);

    // onSubmit 함수가 호출이 되면, props로 받아온 {onInsert} 함수에 현재 value 값을
    // 파라미터로 넣어서 호출을 하고, 현재 vakye 값을 초기화함.
    return(
        <form className="todoinsert" onSubmit={onSubmit}>
            <input placeholder="할 일 입력하세요"
                   value={value}
                   onChange={onChange}
            
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    )
}


export default TodoInsert;