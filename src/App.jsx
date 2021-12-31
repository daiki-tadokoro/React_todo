import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InComplateTodos } from "./components/InComplateTodos";
import { ComplateTodos } from "./components/ComplateTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncompletetodos] = useState([]);
  const [complateTodos, setCompletetodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setIncompletetodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncompletetodos(newTodos);
  };
  const onClickComplate = (index) => {
    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setCompletetodos(newComplateTodos);
    onClickDelete(index);
  };
  const onClickBack = (index) => {
    //完了から削除
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);
    setCompletetodos(newComplateTodos);
    // 未完了に追加
    const newTodos = [...incomplateTodos, complateTodos[index]];
    setIncompletetodos(newTodos);
  };
  return (
    <>
      <InputTodo
        onClick={onClickAdd}
        todoText={todoText}
        onChange={onChangeTodoText}
      />
      <InComplateTodos
        todos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <ComplateTodos todos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
