import React from "react";
const Date = ({ date }) => (
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
  </div>
);

export default Date;
