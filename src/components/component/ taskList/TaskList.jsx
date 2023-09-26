import React from 'react'
import { TaskAdd } from './TaskAdd';
import { TasksProvider } from './TaskContext';
import { Tasks } from './Tasks';
import './TaskListStyle.css'

export const TaskList = () => {
   
  return (
   <TasksProvider>
     <div className='taskProvider'>
     <TaskAdd/>
      <Tasks/> 
     </div>
   </TasksProvider>
  )
}
