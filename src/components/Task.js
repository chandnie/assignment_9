import { FaTimes } from "react-icons/fa";
import { Context } from '../data/context';


const Task = ({ task, onDelete, onToggle }) => {
   const { setTask } = useContext(Context)
   
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
