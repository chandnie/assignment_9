import Task from "./Task";
import { Context } from '../data/context';


const Tasks = ({ tasks, onDelete, onToggle }) => {
  
  const { task } = useContext(Context)
      
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
