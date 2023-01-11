import React, { useState } from "react";
import "./styles.css";

//☀︎ ☽
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div>
        <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
        <h2>Overreacted</h2>
        <h3>The Wet Codebase</h3>
        <p>Sunday 4th 2020</p>
        <h3>Goodbuy Clean Code</h3>
        <p>Welcome to dark mode</p>
        <h3>My Decade in Review</h3>
        <p>Welcome to dark mode</p>
        <h3>What are the React Team Principle</h3>
        <p>Welcome to dark mode</p>
      </div>
    </div>
  );
}
