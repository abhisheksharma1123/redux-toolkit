import React from "react";
import { useSelector } from "react-redux";

const Humans = () => {
  const humans = useSelector((state) => state.humans);
  //   const dispatch = useDispatch();
  return (
    <div>
      <ul style={{ "list-style-type": "none", margin: 0, padding: 0 }}>
        {humans.map((human) => (
          <li>{human.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Humans;
