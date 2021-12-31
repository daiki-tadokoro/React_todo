export const InComplateTodos = (props) => {
  const { todos, onClickComplate, onClickDelete } = props;
  const style = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  return (
    <>
      <div style={style}>
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
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
    </>
  );
};
