import '../../index.css'

const ToDo = ({todo, toggleTask, removeTask}) => {
    return (
        <div key={todo.id} className='todo-item'>
            <div className={todo.complete ? "text-item strike" : "text-item"}
                 onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className='delete-item' onClick={() => removeTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo
