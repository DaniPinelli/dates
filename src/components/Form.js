import React, { Fragment, useState } from "react";

const Form = () => {
  //Add Appointment State
  const [date, updateDate] = useState({
    name: "",
    lastName: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const updateState = (e) => {
    updateDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Fragment>
      <h2>Create </h2>

      <form>
        <label>Patient Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="First Name"
          onChange={updateState}
        />
        <input
          type="text"
          name="lastName"
          className="u-full-width"
          placeholder="Last Name"
          onChange={updateState}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={updateState}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
