import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { decrementAction, incrementAction } from "../Actions/Increment";

const Count = (props) => {
  const handleIncrement = () => {
    props.dispatch(incrementAction());
  };

  const handleDecrement = () => {
    props.dispatch(decrementAction());
  };
  console.log("props", props.counts);
  return (
    <div>
      <h3>Count : {props.counts}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button>Reset</button>
      <ul>
        {props.data.map((ele) => (
          <li key={ele.id}>
            {ele.email} - {ele.name} - {ele.phone}
          </li>
        ))}
      </ul>
      <br />
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counts: state.count,
    data: state.data,
  };
};

export default connect(mapStateToProps)(Count);

//higherordercomponent
//login signup
//react virtual dom concept
//virtual document object module
//state changes it will re-render the component
//Rest API :CRUD operation
//GraphQL : mutations queries : making any update mutations : if you are justreading the queries
//CREATE READ UPDTAE DELETE
//redux actions: functions which consist database and it should return object
//reducers : previous state action
