import React from "react";
import PropTypes from "prop-types";

export default function AboutUs({age = "20"}) {

  // const addData = (data) => {
  //   console.log("Data added!", data);
  // }

  return (
    <div>
      <h1>About Us</h1>
      <p>I am {age} years old.</p>
      {/* <button onClick={() => addData("User 1") }>Add Data</button> */}
    </div>
  );
}

AboutUs.propTypes = {
  age: PropTypes.number
};