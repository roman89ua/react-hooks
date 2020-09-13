import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const setUsers = () => {
    setType("users");
  };
  const setPosts = () => {
    setType("posts");
  };
  const setTasks = () => {
    setType("todos");
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      console.log("clear type");
    };
  }, [type]);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPos({
        x: event.clientX,
        y: event.clientY,
      });
    });
    return () => {
      window.removeEventListener("mousemove", (event) => {
        setPos({
          x: event.clientX,
          y: event.clientY,
        });
      });
    };
  }, []);

  return (
    <React.Fragment>
      <h2>UseEffect</h2>
      <h4>Resourcies: {type}</h4>
      <button
        onClick={setUsers}
        type="button"
        className="btn btn-info marginRight1rem"
      >
        Users
      </button>
      <button
        onClick={setPosts}
        type="button"
        className="btn btn-info marginRight1rem"
      >
        Posts
      </button>
      <button
        onClick={setTasks}
        type="button"
        className="btn btn-info marginRight1rem"
      >
        Tasks
      </button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </React.Fragment>
  );
};

export default UseEffect;
