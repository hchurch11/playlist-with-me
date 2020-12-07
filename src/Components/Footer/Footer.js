import React from "react";
import "../Footer/Footer.css";
import logo from "./logo.svg";

export class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p>
          <span>
            background Photo by{" "}
            <a
              className="App-link"
              href="https://unsplash.com/@icons8?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >
              Icons8 Team
            </a>{" "}
            on{" "}
            <a
              className="App-link"
              href="https://unsplash.com/s/photos/headphones?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </span>
        </p>
        <p>
          {" "}
          <a className="App-link" href="https://github.com/hchurch11/">
            open-sourced
          </a>{" "}
          code by Heather Church made in React
          <img src={logo} className="App-logo" alt="logo" />{" "}
        </p>
      </div>
    );
  }
}
