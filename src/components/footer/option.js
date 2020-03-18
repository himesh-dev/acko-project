import React from "react";

const Option = props => {
  const { title, items } = props.option;
  return (
    <React.Fragment>
      <span className="option-title">{title}</span>
      {items.map((item,i)=>{
          return(
          <span className="option-item">{item}</span>
          )
      })}
    </React.Fragment>
  );
};

export default Option;
