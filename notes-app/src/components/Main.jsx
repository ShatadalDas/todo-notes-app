import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";
import "./css/Main.css";

export default function Main() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [notes, setNotes] = useState([]);
  function handleRemove(item) {
    const newNotes = notes.filter((note) => item !== note);
    setNotes(newNotes);
  }

  return (
    <React.Fragment>
      <main className="main">
        {notes.map((item, index, array) => {
          return (
            <div className="note" key={index}>
              <h1 className="title">{array[array.length - 1 - index].t}</h1>
              <p className="des">{array[array.length - 1 - index].d}</p>
              <div
                className="delete"
                onClick={() => {
                  handleRemove(array[array.length - 1 - index]);
                }}
              >
                <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                </svg>
              </div>
            </div>
          );
        })}
      </main>
      <footer className="footer">
        <div className="left">
          <div className="title">
            <input
              className="titleInput"
              type="text"
              placeholder="Title"
              maxLength={50}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="description">
            <textarea
              className="des"
              placeholder="Description"
              maxLength={500}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <button
          className="add"
          onClick={() => {
            if (title !== "") {
              setNotes((note) => [...note, { t: title, d: des }]);
            }
          }}
        >
          +
        </button>
      </footer>
    </React.Fragment>
  );
}
