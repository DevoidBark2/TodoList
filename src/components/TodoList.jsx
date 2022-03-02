import React from "react";
import Todo from "./Todo";
import './TodoList.css'

const TodoList = ({itemList,updateItemList,deleteItem}) =>{

    return(
        <div className="todolist">
             <p className="title">Список дел</p>
                    {itemList.map((itemObg)=>{
                        return(
                         <Todo itemObg={itemObg} updateItemList={updateItemList} deleteItem={deleteItem}/>
                         )
                    })}
        </div>
    )
}

export default TodoList;