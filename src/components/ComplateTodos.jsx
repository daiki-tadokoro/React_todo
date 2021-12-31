export const ComplateTodos = (props) => {
  const { todos, onClickBack } = props;
  const style = {
    backgroundColor: " #ffffe0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  return (
    <>
      <div style={style}>
        <p className="title">完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
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
