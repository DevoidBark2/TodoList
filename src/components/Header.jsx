import React from "react";
import './Header.css'
import HeaderBtn from "./HeaderBtn";
import HeaderInput from "./HeaderInput";

const Header = ({currentItem,onChangeHandler,addItemList}) =>{
    return(
        <div className="header">
            <HeaderInput  currentItem={currentItem} onChangeHandler={onChangeHandler}/>
            <HeaderBtn addItemList={addItemList}/>
        </div>
    )
}

export default Header;