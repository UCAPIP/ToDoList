import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./auth/Login";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul className="flex flex-row gap-2" >
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
