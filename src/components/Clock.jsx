import React from "react";

export const Clock = () => {
  const [time, setTime] = React.useState();
  function getCurrentTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(() => {
    getCurrentTime();
  }, 1000);
  return <h1>{time}</h1>;
};
