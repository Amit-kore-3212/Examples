import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getData } from "../Actions/backendAction";

const BackEndRequest = (props) => {
  const handleGetData = () => {
    props.dispatch(getData());
  };
  return (
    <div>
      <button onClick={handleGetData}>Get Data</button>
      <h3>Back ENd Request ;{props.count}</h3>
      <ul>
        {props.data.map((ele) => (
          <li key={ele.id}>
            {ele.email} - {ele.name} - {ele.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    data: state.data,
  };
};

export default connect(mapStateToProps)(BackEndRequest);
//backend you will promise object // success error
