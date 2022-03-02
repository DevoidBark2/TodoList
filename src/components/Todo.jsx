import React from "react";
import './Todo.css'
const Todo = ({itemObg,deleteItem}) =>{

    return(
        <div className="todo-block">
            <div className="todo-item">
                {itemObg.item}
            </div>
            <div className="todo-btn">
                <button className="btn" onClick={() => deleteItem(itemObg.key)}>Удалить</button>
            </div>
        </div>
    )
}

export default Todo;