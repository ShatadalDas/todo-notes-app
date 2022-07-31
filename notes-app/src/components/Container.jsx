import React from "react";
import "./css/Container.css";
import Header from "./Header";
import Main from "./Main";

export default function Container() {


  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <Main />
      </div>
    </React.Fragment>
  );
}
