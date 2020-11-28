import { useState } from "react";

const Display = () => {
  const [text, settext] = useState("");
  const [print, setPrint] = useState("");

  const Change = (event) => {
    settext(event.target.value);
  };
  const Click = () => {
    setPrint(text);
  };

  return (
    <div>
      <h1>{print}</h1>
      <input
        type="text"
        placeholder="Fill Data"
        onChange={Change}
        value={text}
      />
      <button onClick={Click}>Click</button>
    </div>
  );
};

export default Display;
