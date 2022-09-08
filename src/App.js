import './index.css';
import {useState} from "react";
import ToDoForm from "./components/ToDo/ToDoForm";
import ToDo from "./components/ToDo/ToDo";

function App() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substring(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
            )
        ])
    }
    return (
        <div className="App">
            <div><h1>Список задач:{todos.length}</h1></div>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todos.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
}

export default App;
