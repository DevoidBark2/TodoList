import React from "react";
import './Header.css'

const HeaderBtn = ({addItemList}) =>{
    return(
        <div className="header-btn">
            <button onClick={addItemList} className="btn">Добавить</button>
        </div>
    )
}

export default HeaderBtn;