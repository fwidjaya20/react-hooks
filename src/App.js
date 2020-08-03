import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>
          <li>
            <NavLink to="/use-state"> useState </NavLink>
            <NavLink to="/use-effect"> useEffect </NavLink>
            <NavLink to="/use-context"> useContext </NavLink>
            <NavLink to="/use-reducer"> useReducer </NavLink>
            <NavLink to="/use-callback"> useCallback </NavLink>
            <NavLink to="/use-memo"> useMemo </NavLink>
            <NavLink to="/use-ref"> useRef </NavLink>
            <NavLink to="/use-imperative-handle"> useImperativeHandle </NavLink>
            <NavLink to="/use-layout-effect"> useLayoutEffect </NavLink>
            <NavLink to="/use-debug-value"> useDebugValue </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
