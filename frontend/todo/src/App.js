import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import axios from 'axios'

function App() {
  
  const [tasks,setTasks] = useState([])
  

  useEffect(()=>{
    axios.get("http://localhost:5000")
              .then((data)=>{
                setTasks(data.data)})
              .catch((err)=>{console.log(err)})
  },[])

  useEffect(()=>{
    axios.get("http://localhost:5000")
              .then((data)=>{
                setTasks(data.data)})
              .catch((err)=>{console.log(err)})
  },[tasks])
  
  const deleteHandler = (_id)=>{
    axios.post("http://localhost:5000/delete",{_id})
              .then((data)=>{
                console.log(data)
                console.log("data deleted successfully")
              }).catch((err)=>{
                console.log(err)
              })
  }

  

  return (
    <div className='main'>
     <h1>ToDo App</h1>
     <Form/>
     {tasks.length ===0 ? 
     <h1>No Tasks...</h1>
     :
     <div className='content'>
        {tasks.map((item)=><Todo text={item.task} key={item._id} _id={item._id} deleteHandler={deleteHandler}/>)}
     </div>
     
     }
     
    </div>
  );
}

export default App;
