import React from "react";
import "./css/Header.css";

export default function Header() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const dateObj = new Date();
  const date = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  return (
    <React.Fragment>
      <header>
          <div role="date" className="date">{date}</div>
          <div role="month" className="month">{month}</div>
      </header>
    </React.Fragment>
  );
}
