import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div
      className="container my-3"
      style={{ minHeight: "70vh", margin: "10px auto" }}
    >
      <h5 className="my-3">Todos List</h5>
      {props.todos.length === 0
        ? "No Todos To Display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo?.sno}
                  onDelete={props?.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};
