import React from "react";

import {
  HashRouter,
  Routes,   
  Route,  
} from "react-router-dom";

import Header from "./components/header";
// import Main from "./components/main"
import Footer from "./components/footer";

import Home from "./pages/Home";
import Login from "./pages/Home/Login";
import Register from "./pages/regester";

function App() {
  return (
    <div>
      <Header />

      <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </HashRouter>

      <Home />

      <Footer />
    </div>
  );
}

export default App;
