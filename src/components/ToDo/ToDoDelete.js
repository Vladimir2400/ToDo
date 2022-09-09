import '../../index.css'

function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className={todo.complete ? "todo-item strike" : "todo-item"}
             >
            <div
                className= "text-item"
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="delete-item" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>

    )
}

export default ToDo