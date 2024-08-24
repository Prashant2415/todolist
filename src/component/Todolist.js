import React, { useState } from 'react'

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
    <div>
      <h1>To Do List</h1>
      <div>
        <input type='text' value={add} onChange={handleInputChange} placeholder='Enter to do'/>
        <button onClick={handleAddButton}>Add to do</button>
      </div>
      {
        data.map((d, index)=>{
            return(
                <div>
                    <li key={d.id}>
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
