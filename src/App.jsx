import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import CreateStore from "./Components/CreateStore";
// import CreateStore from "./Components/CreateStore";

const Layout = () => {
  const location = useLocation();
  const isCreateStorePage = location.pathname === "/create-store";

  return (
    <>
      {/* Only show Navbar and Overview if not on Create Store route */}
      {!isCreateStorePage && <Navbar />}
      <Routes>
        {/* Define routes */}
        <Route path="/" element={!isCreateStorePage && <Overview />} />
        <Route path="/create-store" element={<CreateStore />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
