import React from "react";

const Date = ({ date, deleteDate }) => (
  <div className="date">
    <p>
      First Name <span> {date.name} </span>
    </p>
    <p>
      Last Name <span> {date.lastName} </span>
    </p>
    <p>
      Date <span> {date.dateA} </span>
    </p>
    <p>
      Time <span> {date.time} </span>
    </p>
    <p>
      Symptoms <span> {date.symptoms} </span>
    </p>

    <button
      className="button delete u-full-width"
      onClick={() => deleteDate(date.id)}
    >
      Delete &times;
    </button>
  </div>
);

export default Date;
