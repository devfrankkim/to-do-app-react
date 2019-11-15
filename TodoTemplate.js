import React from 'react';
import './TodoTemplate.scss';

// TodoTemplate에서 작업할 내용
// 화면은 가운데에 정렬시켜 주며, 앱 타이틀(일정관리)을 보여 줄 예정
// 내부 children으로 JSX 파일을 props로 받아서 랜더링 해 줄 예정.

const TodoTemplate = ({ children }) => {
    return (
        <div className="todotemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{ children }</div>
        </div>
    );
}

export default TodoTemplate;