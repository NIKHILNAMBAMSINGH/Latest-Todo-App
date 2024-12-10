import { useState } from "react"
import './index.css'

function App(){

  const[tasks,setTask]=useState([]);
  const[newTask,setNewTask]=useState("");

  function handleInputChange(event){
   setNewTask(event.target.value);
  }

  function addTask(){
    if(newTask.trim()!=""){
      const date=new Date().toLocaleTimeString();
      console.log(date);
      setTask((t)=>
        [...t,
       {task:newTask,time:date}]);
      setNewTask("");
    }

  }

  function deleteTask(index){
     setTask(tasks.filter((element,currentIndex)=>currentIndex!=index))
     
  }
  function moveTaskDown(index){
    if(index<tasks.length-1){
      const copyArray=[...tasks];
      [copyArray[index],copyArray[index+1]]=[copyArray[index+1],copyArray[index]];
      setTask(copyArray);
    }

  }

  function moveTaskUp(index){
    if(index>0){
      const copyArray=[...tasks];
      [copyArray[index-1],copyArray[index]]=[copyArray[index],copyArray[index-1]];
      setTask(copyArray)

    }

  }
  return (
    <div className="to-do-list">
      <h1>Priority</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task.task}</span>
            <div className="to-do-list-time">{task.time}</div>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button-up" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button-down" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App