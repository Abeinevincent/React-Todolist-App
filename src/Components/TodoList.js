import React from 'react'

function TodoList() {
    return (
        <div className="todo-list">
            <ul>
                {todoArr && todoArr.length > 0 ? 
                    todoArr.map(el, i) => (
                        <li key={ i }>
                            <div className={el['done'] ? 'line-through' : null} style={{fontWeight: 'bold', fontSize: '18px'}}> { el.title } </div>
                            <div className="icon">
                                <i className={`fa fa-check-circle pointer $(el['done] ? 'green' : 'blue')`} title="complete" onClick={() => completeTodo(i)}></i>
                                <i className="fa fa-trash-alt pointer" title="complete"></i>
                            </div>
                        </li>
                    )    
            }
                
            </ul>
        </div>
    )
}

export default TodoList
