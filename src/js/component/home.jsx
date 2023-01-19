import React, { useState } from "react";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask(e) {
    e.preventDefault();
    setList(list.concat(task));
    setTask("");
  }
  console.log(list);

  function deleteTask(index) {
    let del = list[index];
    setList(list.filter((item) => item != del));
  }
  console.log(list);

  return (
    <div className="container d-flex flex-column align-items-center py-3">
      <div className="display-5 text-secondary">todos</div>

      <div className="shadow p-3 mb-5 bg-white rounded my-2 d-flex w-75">
        <input
          type="text"
          className="form-control-plaintext"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder={"Add Task"}
        ></input>
        <button
          className="btn btn-primary"
          onClick={addTask}
          disabled={task ? "" : "disabled"}
        >
          +
        </button>
      </div>

	  <div className="bg-success w-75">
      <ul className="list-group list-group-flush">
        {list.map((t, index) => (
          <li className="list-group-item list-group-item-action d-flex justify-content-between" key={index}>
            {t}
            <button className="btn btn-danger" onClick={() => deleteTask(index)}>x</button>
          </li>
        ))}
      </ul>
	  </div>
    </div>
  );
};

export default Home;
