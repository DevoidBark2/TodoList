import React,{useState} from 'react';
import Header from './components/Header';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import BgWindow from './components/BgWindow';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [currentItem,setCurrentItem] = useState('');
  const [itemList,updateItemList] = useState([]);

  const onChangeHandler = (e)=>{
    setCurrentItem(e.target.value)
  }

  const addItemList = () =>{
      updateItemList([...itemList,{item:currentItem,key:Date.now()}]);
      setCurrentItem('');
  }
      
  const deleteItem = (key) =>{
    const newItem = itemList.filter((itemObg)=>{
      return itemObg.key !== key;
    });
    updateItemList(newItem);
  }

  return (
    <div className="App">
      <div className="container">
          <Header onChangeHandler={onChangeHandler} addItemList={addItemList} currentItem={currentItem}/>
          <div className="main-section">
              <Navbar/>
              <Routes>
                  <Route path='/main' element={<TodoList itemList={itemList} updateItemList={updateItemList} deleteItem={deleteItem}/>}/>
                  <Route path='bgwindow' element={<BgWindow/>}/>
              </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;