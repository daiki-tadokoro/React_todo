export const ComplateTodos = (props) => {
  const { complateTodos, onClickBack } = props;
  return (
    <>
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
