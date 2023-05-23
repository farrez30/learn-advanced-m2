import React from "react";

// Learn Higher Order Component

function LearnHOC(Component) {
  return (props) => {
    const style = {
      padding: "0.2rem",
      margin: "1rem",
      backgroundColor: "blue",
    };
    const obj = {name:"name", age:"age"};
    return <Component style={style} {...props} />;
  };
}

export default LearnHOC;
