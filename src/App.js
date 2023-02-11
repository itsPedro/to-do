import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      return (task.id === id ? {...task, completed: true} : task);
    }))
  }

  const deleteTask = (id) => { 
    setTodoList(todoList.filter((task) => task.id !== id));
  };


  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Adicionar</button>
      </div>
      <div className="list">
        {todoList.map((task) => { return (
          <Task taskName={task.taskName} 
            id={task.id} 
            deleteTask={deleteTask}
            completeTask={completeTask}
            completed={task.completed}
          />
        )}
        )}
      </div>
    </div>
  );
}

export default App;
