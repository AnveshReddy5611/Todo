import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deletetask } from "./todoSlice";
import { useState } from "react";

function Todo() {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const [title, setTitle] = useState("");
  // console.log(title.type, "I am title")
  const task = useSelector((state) => state.todo.tasks);
  console.log(task, "I am task");
  const dispatch = useDispatch();

  const handleTitleChange = (ev) => {
    setTitle(ev.target.value);
  };

  const handleEdit = (event) => {
    setEdit(true);
    setTitle(event.x);
    setEditText(event.x);
  };
  const handleDelete = (event) => {
    dispatch(deletetask(task.indexOf(event.x)))
  };

  const handleSubmit = () => {
    if (!edit) {
      dispatch(addTask(title));
      setTitle("");
    } else {
      dispatch(editTask([task.indexOf(editText), title]));
      setEdit(false);
      setEditText("");
    }
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title || ""}
        onChange={handleTitleChange}
      />
      <button onClick={handleSubmit}>AddTask</button>

      {task.map((x) => (
        <div key={String(x)}>
          {x}
          <button
            className="btn btn-primary"
            id="btn1"
            onClick={() => handleEdit({ x })}
          >
            Edit
          </button>
          <button
            className="btn btn-primary"
            id="btn1"
            onClick={() => handleDelete({ x })}
          >
           Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
