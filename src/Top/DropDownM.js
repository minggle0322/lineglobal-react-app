import React, { useRef } from "react";
import "./Style.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
export default function App() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="containerB">
      <div className="menu-containerB">
        <button onClick={onClick} className="menu-triggerB">
          <span>LANGUAGE</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menuboxB ${isActive ? "active" : "inactive"}`}
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