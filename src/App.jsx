import React, { useEffect } from "react";
import "./App.css";
import Wrapper from "./Components/Wrapper";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Wrapper>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Wrapper>
  );
};

export default App;
