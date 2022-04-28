import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";

const GridComponent = (props) => {
  const [names, setNames] = useState(["amit", "erjon", "eli", "xyz", "abc"]);
  return (
    <div>
      <h3>{props.count}</h3>
      <Grid container spacing={2}>
        {names.map((ele) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  border: "1px solid #232a35",
                  textAlign: "center",
                }}
              >
                {ele}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(GridComponent);
//12parts lg , sm, md , xs //redux
