import React from "react";
import './Header.css'

const HeaderInput = ({currentItem,onChangeHandler}) =>{

    return(
        <div className="header-input">
            <input value={currentItem} onChange={onChangeHandler} className="input" type="text" placeholder="Ввод..."/>
        </div>
    )
}

export default HeaderInput;