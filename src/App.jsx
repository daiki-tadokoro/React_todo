import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incoomplateTodos, setIncompletetodos] = useState([
    "aaaaaa",
    "iiiiiii"
  ]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incoomplateTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complate-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>あああああ</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p>いいい</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
