import React from 'react'
import { useState } from 'react';
import "../component/Todolist.css";
const Todolist = () => {
    const [inputBox, setInputBox] = useState();
    const handleAddTask = () =>{
        setInputBox(true);
    }
    console.log(inputBox)
    //const datas = [{id:1 , name: "Prashant"},{id:2 , name: "Sonu"}]
    const [datas, setDatas] = useState([])
    const [inputData , setInputData] = useState("")
    const handleInputChange =(e) =>
    {
        setInputData(e.target.value)
    }
    const handleAddNew =(e)=>{
        if(inputData.trim === "") return
        const newData = {id: datas.length + 1 , name: inputData};
        setDatas([...datas,newData])
        setInputData("");
        setInputBox(false);
    }
  return (
    <div className='todolist-container'>
        <h1 className='title'>To Do List</h1>
      <div className='inner-container'>
        <button className='add-task-button' onClick={handleAddTask}>Add Task</button>
      </div>
      <br/>
      {inputBox ?
        <form className='input-container'>
            <input className='input-field' type='text' value={inputData} onChange={handleInputChange} placeholder='Enter your to do'/>
            <button className='add-button' onClick={handleAddNew}>Add</button>
        </form>
      : ""}
      <br/>
      <div className='display-container'>
        {datas.map((data,index)=>{
            return(
                <div className='display-result'>
                    <li key={index.id}>{data.name}</li>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Todolist
