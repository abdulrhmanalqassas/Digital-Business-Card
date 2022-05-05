import React from "react";
import { PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="./Facebook Icon.png" alt="" />{" "}
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src="./Twitter Icon.png" alt="" />{" "}
        </a>
        <a href="https://www.linkedin.com/in/abdulrhman-alqassas-046394200/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src="./Instagram Icon.png" alt="" />{" "}
        </a>
        <a href="https://github.com/abdulrhmanalqassas" target="_blank" rel="noopener noreferrer">
          <img src="./GitHubIcon.png" alt="" />{" "}
        </a>
      </footer>
    );
  }
}
