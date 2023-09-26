import React, { useContext, useState } from 'react'

import './TaskListStyle.css'
import { TasksDispatchContext } from './TaskContext';
let nextId = 3;

export const TaskAdd = () => {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <h1>My tasks in the store</h1>
      <div className='addTask'>
        <input
            className='addTaskInput'
            value = {text}
            onChange={e => setText(e.target.value)}
        />
        <button onClick = {() => {
            if(text.trim().length === 0) { return text};
            setText('');
            dispatch({
              type: 'add',
              id: nextId++,
              text: text
          })
        }}
          className = 'addTaskBtn'
        >add task</button>
      </div>
  </>
  )
}
