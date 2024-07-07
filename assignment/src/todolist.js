
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const apiUrl = 'http://localhost:5000/api/todolists';

// function Todo() {
//   const [todoLists, setTodoLists] = useState([]);
//   const [newListName, setNewListName] = useState('');

//   useEffect(() => {
//     fetchTodoLists();
//   }, []);

//   const fetchTodoLists = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       setTodoLists(response.data);
//     } catch (error) {
//       console.error('Error fetching todo lists:', error);
//     }
//   };

//   const addTodoList = async () => {
//     if (newListName.trim() !== '') {
//       try {
//         const response = await axios.post(apiUrl, { name: newListName });
//         setTodoLists([...todoLists, response.data]);
//         setNewListName('');
//       } catch (error) {
//         console.error('Error adding todo list:', error);
//       }
//     }
//   };
  
//   const removeTodoList = async (id) => {
//     try {
//       await axios.delete(`${apiUrl}/${id}`);
//       setTodoLists(todoLists.filter(list => list._id !== id));
//       console.log(`Todo list with id ${id} deleted successfully.`);
//     } catch (error) {
//       if (error.response) {
//         console.error('Error response:', error.response.data);
//         console.error('Error status:', error.response.status);
//         console.error('Error headers:', error.response.headers);
//       } else if (error.request) {
//         console.error('Error request:', error.request);
//       } else {
//         console.error('Error message:', error.message);
//       }
//       console.error('Error config:', error.config);
//     }
//   };

//   const editTodoList = async (id, newName) => {
//     try {
//       const response = await axios.patch(`${apiUrl}/${id}`, { name: newName });
//       setTodoLists(todoLists.map(list => list._id === id ? response.data : list));
//     } catch (error) {
//       console.error('Error editing todo list:', error);
//     }
//   };

//   return (
//     <div style={{backgroundImage:'url("https://png.pngtree.com/thumb_back/fh260/background/20240606/pngtree-colored-stickers-attached-to-a-white-wall-on-the-table-a-image_15741478.jpg")', 
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       }}>


//     <div className="container">
//       <h1>Todo Lists</h1>
//       <div>
//         <input
//           type="text"
//           value={newListName}
//           onChange={(e) => setNewListName(e.target.value)}
//           placeholder="Enter new list name"
//         />
//         <button onClick={addTodoList}>Add List</button>
//       </div>
//       <ul className="list-group mt-3">
//         {todoLists.map((list) => (
//           <TodoList
//             key={list._id}
//             list={list}
//             removeTodoList={removeTodoList}
//             editTodoList={editTodoList}
//           />
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// }

// function TodoList({ list, removeTodoList, editTodoList }) {
//   const [tasks, setTasks] = useState(list.items);
//   const [newTask, setNewTask] = useState('');

//   const addTask = async () => {
//     if (newTask.trim() !== '') {
//       const updatedItems = [...tasks, { name: newTask }];
//       try {
//         await axios.patch(`${apiUrl}/${list._id}`, { items: updatedItems });
//         setTasks(updatedItems);
//         setNewTask('');
//       } catch (error) {
//         console.error('Error adding task:', error);
//       }
//     }
//   };

//   const removeTask = async (taskIndex) => {
//     const updatedItems = tasks.filter((_, index) => index !== taskIndex);
//     try {
//       await axios.patch(`${apiUrl}/${list._id}`, { items: updatedItems });
//       setTasks(updatedItems);
//     } catch (error) {
//       console.error('Error removing task:', error);
//     }
//   };

//   const editTask = async (taskIndex, newTaskName) => {
//     const updatedItems = tasks.map((task, index) => index === taskIndex ? { name: newTaskName } : task);
//     try {
//       await axios.patch(`${apiUrl}/${list._id}`, { items: updatedItems });
//       setTasks(updatedItems);
//     } catch (error) {
//       console.error('Error editing task:', error);
//     }
//   };

//   return (
//     <li className="list-group-item">
//       <h3>{list.name}</h3>
//       <button onClick={() => editTodoList(list._id, prompt("Enter new list name", list.name))}>
//         Edit List
//       </button>
//       <button onClick={() => removeTodoList(list._id)}>Remove List</button>
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Enter new task"
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <ul className="list-group mt-3">
//         {tasks.map((task, taskIndex) => (
//           <TodoItem
//             key={taskIndex}
//             task={task}
//             taskIndex={taskIndex}
//             removeTask={removeTask}
//             editTask={editTask}
//           />
//         ))}
//       </ul>
//     </li>
    
//   );
// }

// function TodoItem({ task, taskIndex, removeTask, editTask }) {
//   return (
//     <li className="list-group-item d-flex justify-content-between align-items-center">
//       {task.name}
//       <div>
//         <button onClick={() => editTask(taskIndex, prompt("Enter new task name", task.name))}>
//           Edit
//         </button>
//         <button onClick={() => removeTask(taskIndex)}>Remove</button>
//       </div>
//     </li>
    
//   );
// }

// export default Todo;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/todolists';

function Todo() {
  const [todoLists, setTodoLists] = useState([]);
  const [newListName, setNewListName] = useState('');

  useEffect(() => {
    fetchTodoLists();
  }, []);

  const fetchTodoLists = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTodoLists(response.data);
    } catch (error) {
      console.error('Error fetching todo lists:', error);
    }
  };

  const addTodoList = async () => {
    if (newListName.trim() !== '') {
      try {
        const response = await axios.post(apiUrl, { name: newListName });
        setTodoLists([...todoLists, response.data]);
        setNewListName('');
      } catch (error) {
        console.error('Error adding todo list:', error);
      }
    }
  };

  const removeTodoList = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setTodoLists(todoLists.filter(list => list._id !== id));
      console.log(`Todo list with id ${id} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting todo list:', error);
    }
  };

  const editTodoList = async (id, newName) => {
    try {
      const response = await axios.patch(`${apiUrl}/${id}`, { name: newName });
      setTodoLists(todoLists.map(list => list._id === id ? response.data : list));
    } catch (error) {
      console.error('Error editing todo list:', error);
    }
  };
  return (
    <div style={{backgroundImage:'#FDF5DF', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo Lists</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          style={styles.input}
          placeholder="Enter new list name"
        />
        <button style={styles.button} onClick={addTodoList}>Add List</button>
      </div>
      <ul style={styles.list}>
        {todoLists.map((list) => (
          <TodoList
            key={list._id}
            list={list}
            removeTodoList={removeTodoList}
            editTodoList={editTodoList}
          />
        ))}
      </ul>
    </div>
    </div>
  );
}

function TodoList({ list, removeTodoList, editTodoList }) {
  const [tasks, setTasks] = useState(list.items);
  const [newTask, setNewTask] = useState('');

  const addTask = async () => {
    if (newTask.trim() !== '') {
      const updatedItems = [...tasks, { name: newTask }];
      try {
        await axios.patch(`${apiUrl}/${list._id}`, { items: updatedItems });
        setTasks(updatedItems);
        setNewTask('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const removeTask = async (taskIndex) => {
    const updatedItems = tasks.filter((_, index) => index !== taskIndex);
    try {
      await axios.patch(`${apiUrl}/${list._id}`, { items: updatedItems });
      setTasks(updatedItems);
    } catch (error) {
      console.error('Error removing task:', error);
    }
  };

  const editTask = async (taskIndex, newTaskName) => {
    const updatedItems = tasks.map((task, index) => index === taskIndex ? { name: newTaskName } : task);
    try {
      await axios.patch(`${apiUrl}/${list._id}`, { items: updatedItems });
      setTasks(updatedItems);
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div style={{backgroundImage:'#FDF5DF', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>
    <li style={styles.todoList}>
      <h3>{list.name}</h3>
      <div style={styles.buttonContainer}>
        <button style={styles.editButton} onClick={() => editTodoList(list._id, prompt("Enter new list name", list.name))}>
          Edit List
        </button>
        <button style={styles.removeButton} onClick={() => removeTodoList(list._id)}>Remove List</button>
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
          placeholder="Enter new task"
        />
        <button style={styles.addButton} onClick={addTask}>Add Task</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, taskIndex) => (
          <TodoItem
            key={taskIndex}
            task={task}
            taskIndex={taskIndex}
            removeTask={removeTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </li>
    </div>
  );
}

function TodoItem({ task, taskIndex, removeTask, editTask }) {
  return (
    <div style={{backgroundImage:'#FDF5DF', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>
    <li style={styles.taskItem}>
      <span>{task.name}</span>
      <div style={styles.buttonContainer}>
        <button style={styles.editButton} onClick={() => editTask(taskIndex, prompt("Enter new task name", task.name))}>
          Edit
        </button>
        <button style={styles.removeButton} onClick={() => removeTask(taskIndex)}>Remove</button>
      </div>
    </li>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    background: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '10px',
  },
  input: {
    flex: '1',
    marginRight: '10px',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  todoList: {
    marginBottom: '20px',
    padding: '10px',
    background: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  buttonContainer: {
    marginBottom: '10px',
  },
  editButton: {
    marginRight: '10px',
    padding: '6px 12px',
    background: '#ffc107',
    color: '#212529',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  removeButton: {
    padding: '6px 12px',
    background: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  addButton: {
    padding: '8px 16px',
    background: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    background: '#f0f0f0',
    borderRadius: '4px',
    marginBottom: '5px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
};

export default Todo;



