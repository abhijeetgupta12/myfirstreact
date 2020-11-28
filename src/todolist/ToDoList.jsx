import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
//import TextField from '@material-ui/core/TextField';

const ToDoList = () => {
  const [state, changeState] = useState({
    item: "",
    toarray: [],
  });
  /* When hooks is used in this way. everytime you call changeState, you have to return the 
    whole previous object and then update the values inside. Otherwise you may use distinct states
    using different useState() */

  const listitem = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    changeState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleclick = () => {
    changeState((prev) => {
      return {
        toarray: [...prev.toarray, prev.item],
        item: "",
      };
    });
  };

  return (
    <div>
      <input type="text" name="item" value={state.item} onChange={listitem} />
      <button onClick={handleclick}>
        <AddIcon />
      </button>
      <ol>
        {state.toarray.map((val) => (
          <li>{val}</li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
