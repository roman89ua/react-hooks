import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);
  return (
    <React.Fragment>
      <h2>{time}</h2>
    </React.Fragment>
  );
}
