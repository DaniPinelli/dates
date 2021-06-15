import React, { Fragment, useState } from "react";
import Form from "./components/Form";
import Date from "./components/Date";

function App() {
  //Dates array
  const [dates, storeDates] = useState([]);

  //Taking new dates and add the new date
  const createDate = (date) => {
    storeDates([...dates, date]);
  };

  return (
    <Fragment>
      <h1>Medical Patient Manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createDate={createDate} />
          </div>
          <div className="one-half column">
            <h2>Appointment list</h2>
            {dates.map((date) => (
              <Date key={date.id} date={date} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
