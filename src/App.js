import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Date from "./components/Date";

function App() {
  //Dates on localStorage
  let initialDates = localStorage.getItem("dates");
  if (!initialDates) {
    initialDates = [];
  }

  //Dates array
  const [dates, storeDates] = useState([initialDates]);

  //Using useEffect when state changes
  useEffect(() => {
    let initialDates = localStorage.getItem("dates");

    if (initialDates) {
      localStorage.setItem("dates", JSON.stringify(dates));
    } else {
      localStorage.setItem("dates", JSON.stringify([]));
    }
  }, [dates]);

  //Taking new dates and add the new date
  const createDate = (date) => {
    storeDates([...dates, date]);
  };

  //Delete dates by id
  const deleteDate = (id) => {
    const newDates = dates.filter((date) => date.id !== id);
    storeDates(newDates);
  };

  //Optional messagge
  const title = dates.length === 0 ? "" : "List";

  return (
    <Fragment>
      <h1>Medical Patient Manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createDate={createDate} />
          </div>
          <div className="one-half column">
            <h3>{title}</h3>
            {dates.map((date) => (
              <Date key={date.id} date={date} deleteDate={deleteDate} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
