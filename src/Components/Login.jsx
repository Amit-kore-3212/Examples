import { getThemeProps } from "@material-ui/styles";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState(false);
  const [values, setValues] = useState(["amit", "eli", "erion", "xyz"]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent unnecessary refresh of the page

    const data = {
      email,
      password,
    };
    console.log("submit", data); //concise property
  };

  const handleChange = (e) => {
    console.log("e", e.target.checked);
    setColor(e.target.checked);
  };
  const handleBlur = () => {
    console.log("blur event");
  };
  const handleDropDownChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h3>Login</h3>
      <h3>Count:{props.count}</h3>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input
          type={"email"}
          placeholder={"Enter Valid Email"}
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlur}
          style={{ backgroundColor: color }}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type={"password"}
          placeholder={"Enetr valid Password"}
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <input type={"submit"} value={"Login"} />
        <br />
        <br />
        <select onChange={handleDropDownChange}>
          {values.map((ele) => (
            <option value={ele}>
              {ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
      </form>
      <div>
        <button>Add</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps)(Login);
//input : text , email , password, file , color, number, date, datetime-local, submit , dropdown , textArea
