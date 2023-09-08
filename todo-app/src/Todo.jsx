import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import InputData from "./Components/InputData";
import Card from "./Components/Card";
import EmptyList from "./Components/EmptyList";

const todoData = [];
const Todo = () => {
  const [enterTodo, setEnterTodo] = useState("");
  const [todos, setTodos] = useState(todoData);
  const [ error, setError ] = useState("")
  const handleClick = () => {
    if (enterTodo.length < 2) {
        console.log("ye")
      return setError( "Please enter Todo at least 3 Char");
    }
    setError("")
    setTodos([...todos, { title: enterTodo }]);
    setEnterTodo("");
  };
  const handleDelete = (title) => {
    setTodos((todo) => {
      return todo.filter((el) => el.title !== title);
    });
  };
  return (
    <div className="m-7">
      <Navbar />
      <InputData
        handleClick={handleClick}
        setEnterTodo={setEnterTodo}
        enterTodo={enterTodo}
        error={error}
      />
      {todos.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4  w-[70%] mx-auto mt-7 gap-10">
          {todos.length > 0 &&
            todos.map(({ title }, id) => {
              return <Card id={id} title={title} handleDelete={handleDelete} />;
            })}
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Todo;
