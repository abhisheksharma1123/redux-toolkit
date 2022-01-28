import React from "react";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  //   const dispatch = useDispatch();
  return (
    <div>
      <ul style={{ "list-style-type": "none", margin: 0, padding: 0 }}>
        {tasks.map((task) => (
          <li>
            {task.title} is <span>{task.complete ? "done" : " not done"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
