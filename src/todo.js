import { useState } from "react";

import "./styles.css";
import { Alert, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const data = [
    {
      id: "1",
      task: "hello"
    }
  ];

  const [count, setcount] = useState(data);
  const trash = <FontAwesomeIcon icon={faTrash} />;
  const [add, setadd] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    addTask(add);
    setadd("");
  };

  const addTask = (add) => {
    let copy = [...count];
    copy = [...copy, { id: count.length + 1, task: add }];
    setcount(copy);
  };
  const handlerchange = (e) => {
    setadd(e.target.value);
  };

  const deletetask = (index) => {
    var newtask = count.filter((item) => item.id !== index);
    newtask.splice();
    setcount([...newtask]);
    console.log(setcount);
  };

  return (
    <div className="card">
      <div className="card-body" style={{ paddingBottom: "500px" }}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={add}
            placeholder="Add a task........."
            onChange={handlerchange}
            style={{ marginRight: "20px" }}
            required
          />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </form>

        <div className="task">
          {count.map((counts) => {
            return (
              <div id={counts.id} key={counts.id + counts.task}>
                <Alert variant="primary">
                  {counts.task}
                  <span style={{ float: "right", cursor: "pointer" }}>
                    <div onClick={() => deletetask(counts.id)}>{trash}</div>
                  </span>
                </Alert>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
