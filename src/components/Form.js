import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ createDate }) => {
  //Add Appointment State
  const [date, updateDate] = useState({
    name: "",
    lastName: "",
    dateA: "",
    time: "",
    symptoms: "",
  });

  const [error, updateError] = useState(false);

  //Function that is executed when the user types in the input
  const updateState = (e) => {
    updateDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };

  //Extract the values
  const { name, lastName, dateA, time, symptoms } = date;

  //When user submit the form
  const submitDate = (e) => {
    e.preventDefault();

    //Validate
    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      dateA.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      updateError(true);
      return;
    }

    //Delete prev messagge if exist
    updateError(false);

    //Asign id
    date.id = uuidv4();

    //Create the date
    createDate(date);

    //Refresh the form
    updateDate({
      name: "",
      lastName: "",
      dateA: "",
      time: "",
      symptoms: "",
    });
  };

  return (
    <Fragment>
      <h2>Create </h2>

      {error ? <p className="alert-error">Please complete all fields</p> : null}

      <form onSubmit={submitDate}>
        <label>Patient Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="First Name"
          onChange={updateState}
          value={name}
        />
        <input
          type="text"
          name="lastName"
          className="u-full-width"
          placeholder="Last Name"
          onChange={updateState}
          value={lastName}
        />
        <label>Date</label>
        <input
          type="date"
          name="dateA"
          className="u-full-width"
          onChange={updateState}
          value={dateA}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={updateState}
          value={symptoms}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
