import React, { useState } from 'react';


function ToDoList() {

    const [tasks, setTasks] = useState(["Programming"]);
    const [newTask, setNewTask] = useState();

    function HandleInputChange(event) {
        setNewTask(event.target.value);

    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
     const updatedTasks = tasks.filter((_, i) => i !== index);
     setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
     if(index > 0){
               const updatedTasks = [...tasks];
               [updatedTasks[index],
                updatedTasks[index - 1]] =
                 [updatedTasks[index - 1],
                  updatedTasks[index]];
                  setTasks(updatedTasks);
     }

    }

    function moveTaskDown(index) {
 if(index < tasks.length - 1){
    const updatedTasks = [...tasks];
    [updatedTasks[index],
    updatedTasks[index + 1]] =
    [updatedTasks[index + 1], 
     updatedTasks[index]]
     setTasks(updatedTasks);
 }
    }
    return (
        <>
            <div className='ToDoDiv'>
                <input placeholder='Enter a Task...'
                    onChange={HandleInputChange} className='inputTask'></input>
                <button className='add-button' onClick={addTask}>Add Task</button>

            </div>
            <ol className='OLTask'>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='spanText'>{task}</span>
                        <button className='deleteTaskBtn'
                            onClick={() => deleteTask(index)}>Delete</button>

                        <button className='upTaskBtn'
                            onClick={() => moveTaskUp(index)}>👍</button>

                        <button className='downTaskBtn'
                            onClick={() => moveTaskDown(index)}>👎</button>
                    </li>



                )}
            </ol>
        </>
    )
}


export default ToDoList;
