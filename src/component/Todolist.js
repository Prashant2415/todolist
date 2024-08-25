import React, { useState } from 'react'
import { dummyData } from './DummyData';
import "../component/TodoList.css";
const Todolist = () => {
    const [data, setData]= useState([]);
    const [add, setAdd] = useState("");
    const handleInputChange = (e) =>{
        setAdd(e.target.value);
    }
    const handleAddButton = ()=>{
        if(add.trim === "") return
        const newData = {id: data.length + 1 , name: add};
        setData([...data, newData]);
        setAdd("");
    }
    const deleteItem = (id)=>{
        const updateItem = data.filter(i => i.id !== id);
        setData(updateItem);
    }
  return (
    <div className='todolist-container'>
      <h1 className='title'>To Do List</h1>
      <div className='input-container'>
        <input className='input-field' type='text' value={add} onChange={handleInputChange} placeholder='Enter to do'/>
        <button className='button-field' onClick={handleAddButton}>Add to do</button>
      </div>
      {
        data.map((d, index)=>{
            return(
                <div className='result-div'>
                    <li className='display-list' key={d.id}>
                        {d.name}
                        <button onClick={()=>{deleteItem(d.id)}}>clear</button>
                    </li>
                </div>
            )
        })
      }
    </div>
  )
}

export default Todolist
