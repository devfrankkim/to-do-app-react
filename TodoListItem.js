import React from 'react';
import './TodoListItem.scss';
import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox} from 'react-icons/md';
import cx from 'classnames';
// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트.
// todo 객체를 props로 받아 와서 상태에 따른 스타일의 UI를 보여줌.

function TodoListItem({todo, onRemove}){
    const {id, text, checked} = todo;
    return(
        <div className="todolistitem">
        <div className={cx("checkbox", {checked})}>
                {checked ? <MdCheckBox/> :  <MdCheckBoxOutlineBlank/>}  
            <div className="text">{text}</div>
        </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
        </div>
        </div>
    );

}

export default TodoListItem;
