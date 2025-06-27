import React from "react";
import Input from "../components/Input.jsx";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
        <div>
          <Input label="Title" />
          <Input label="Description" textarea />
          <Input label="Due Date" textarea />
        </div>
      </menu>
    </div>
  );
}
