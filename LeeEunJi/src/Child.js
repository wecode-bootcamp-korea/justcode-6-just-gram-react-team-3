import React from "react";

function Child(props) {
  // console.log(props);
  //  {
  //    titleColor: 'red',
  //    contentColor: 'red'
  //  }

  return (
    <div>
      <h1 style={{ color: props.titleColor }} onClick={props.changeColor}>
        Child Component
      </h1>
    </div>
  );
}

export default Child;
