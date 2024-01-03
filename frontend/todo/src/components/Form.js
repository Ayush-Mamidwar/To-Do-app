import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [task,setTask] = useState("");

    const addToDoHandler = ()=>{
        axios.post("http://localhost:5000/save",{task}).then((data)=>{
            console.log(data)
            setTask("")
        }).catch((err)=>{
            console.log(err)
        })
    }

    const onChangeHandler = (e)=>{
        setTask(e.target.value)
    } 
  return (
    <div className='form'>
        <input placeholder='Enter task...' value={task} onChange={onChangeHandler}/>
        <button onClick={addToDoHandler}>Add</button>
    </div>
  )
}

export default Form