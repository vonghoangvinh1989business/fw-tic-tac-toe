import React from "react";

function History({ history, jump }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {history.map((_, index) => {
          const description = index
            ? `Go to move #${index}`
            : "Go to game start";
          return (
            <li key={index}>
              <button onClick={() => jump(index)}>{description}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
