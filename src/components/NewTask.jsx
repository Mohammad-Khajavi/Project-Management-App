import React, { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredtask] = useState("");

  function handleChange(event) {
    setEnteredtask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredtask("");
  }

  return (
    <div className="flex items-center gap-4`">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 mx-2"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
