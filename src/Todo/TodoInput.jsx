import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [state, setState] = useState("");

  return (
    <div>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="...add task"
      />

      <button
        onClick={() => {
          onAdd(state);
          setState("");
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoInput;
