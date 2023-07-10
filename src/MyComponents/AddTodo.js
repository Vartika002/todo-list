import React, { useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); //Our page is not reload
    if (!title || !desc) {
      alert("Title and Description can't be blank");
    }
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Descriprtion
          </label>
          <input
            type="text"
            value={desc}
            className="form-control"
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sm btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}
