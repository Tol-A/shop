import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TaskContext";

export  const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);
    let taskContent;

    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={e => {
              dispatch({
                type: 'changed',
                task: {
                  ...task,
                  text: e.target.value
                }
              });
            }} />
          <button onClick={() => setIsEditing(false)} className="taskBtn">
            Save
          </button>
        </>
      );
    } else {
      taskContent = (
        <>
          <div className = 'taskText'><b>{task.text}</b></div>
          <button onClick={() => setIsEditing(true)} className="taskBtn">
            Edit
          </button>
        </>
      );
    }
    return (
      <div className="task">
        <input
          type="checkbox"
          checked={task.done}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: e.target.checked
              }
            });
          }}
        /> 
        <div className="taskContent">
        { taskContent}
        <button onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id
          });
        }}
        className="taskBtn"
        >
          Delete
        </button>
        </div>
      </div>
    );
  }
  