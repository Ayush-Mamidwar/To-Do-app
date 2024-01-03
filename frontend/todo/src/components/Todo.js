import React, { useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios'

const Todo = ({text,deleteHandler,_id}) => {
    const[updating,setIsUpdating] = useState(false)
    const [task,setTask] = useState(text)
    const [updateValue, setUpdateValue] = useState("");
    

    const updateHandler = ()=>{
        setIsUpdating(true);
    }

    const valueChangeHandler=(e)=>{
        setTask(e.target.value);
    }

    const completeUpdate = ()=>{
        axios.post("http://localhost:5000/update",{_id,task}).then((data)=>{
        }).catch((err)=>{
            console.log(err);
        })
        setIsUpdating(false)
    }
    
  return (
    <div className='todo' key={_id}>
       {updating ? (
    <div className='update-container'>
      <input onChange={valueChangeHandler} />
      <button onClick={completeUpdate}>done</button>
    </div>
  ) : (
    <>
      {task}
      <div className='icons'>
        <BiEdit className="icon" onClick={updateHandler} />
        <AiFillDelete className="icon" onClick={() => { deleteHandler(_id) }} />
      </div>
    </>
  )}
        
    </div>
  )
}

export default Todo