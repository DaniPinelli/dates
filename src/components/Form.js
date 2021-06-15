import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <h2>Create Appointment</h2>

      <form>
        <label>Patient Name</label>
        <input
          type="text"
          name="patient"
          className="u-full-width"
          placeholder="First Name"
        />
        <input
          type="text"
          name="patient"
          className="u-full-width"
          placeholder="Last Name"
        />
        <label>Date</label>
        <input type="date" name="date" className="u-full-width" />
        <label>Time</label>
        <input type="time" name="time" className="u-full-width" />
      </form>
    </Fragment>
  );
};

export default Form;
