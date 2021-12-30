import { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplate(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complate-area">
        <p className="title">完了のTODO</p>
        <ul>
          {complateTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
