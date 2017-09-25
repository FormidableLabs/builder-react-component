/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import { <%= componentName %> } from "../src/index";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <<%= componentName %> />
      </div>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
