import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App =()=> {
 const pageSize=6

    return (
      
      <div>
        <script crossorigin src="https://unpkg.com/react-top-loading-bar"></script>
        <Router>
          <Navbar />
          {/* <News pageSize={pageSize} category="sports" /> */}
          <Routes>
        

          

            <Route
              exact
              path="/"
              element={<News key="home" pageSize={pageSize} category="general" />}
            ></Route>
            <Route
              exact
              path="/"
              element={<News key="homes" pageSize={pageSize} category="general" />}
            ></Route>
            <Route
              exact
              path="/business"
              element={<News key="business" pageSize={pageSize} category="business" />}
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={pageSize}
                  category="entertainment"
                />
              }
            ></Route>

            <Route
              exact
              path="/health"
              element={<News key="health" pageSize={pageSize} category="health" />}
            ></Route>
            <Route
              exact
              path="/science"
              element={<News key="science" pageSize={pageSize} category="science" />}
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News key="sports" pageSize={pageSize} category="sports" />}
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News key="technology" pageSize={pageSize} category="technology" />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  
}

export default App