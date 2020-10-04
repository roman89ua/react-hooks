import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand">
          React hooks
        </NavLink>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/useState" className="nav-link">
              UseState
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/useEffect" className="nav-link">
              UseEffect
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/useRef" className="nav-link">
              UseRef
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/useMemo" className="nav-link">
              UseMemo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/useCallback" className="nav-link">
              UseCallback
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/useContext" className="nav-link">
              UseContext
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/useReducer" className="nav-link">
              UseReducer
            </NavLink>
          </li>
          {/* <li className="nav-item">
                        <NavLink to="/" className="nav-link">1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">1</NavLink>
                    </li> */}
        </ul>
      </nav>
    </React.Fragment>
  );
}
