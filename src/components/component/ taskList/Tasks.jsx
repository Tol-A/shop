import {useContext } from 'react';
import { TasksContext} from './TaskContext';
import { Task } from './Task';

export const Tasks = () => {
  const tasks = useContext(TasksContext);
  if(tasks.length === 0) {
    return <h1 className='noTasks' >no tasks</h1>
  }
  return (
    <div className='tasks'>
      {tasks.map(task => (
        <div key={task.id}>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
}





