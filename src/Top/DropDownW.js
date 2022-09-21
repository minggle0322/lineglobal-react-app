import React, { useRef } from "react";
import "./StyleW.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
export default function App() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>LANGUAGE</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menubox ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">한국어</a>
            </li>
            <li>
              <a href="#">English</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}