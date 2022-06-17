import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "../../pages/Cadastro/Cadastro";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Home from "../../pages/Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";

import Navbar from "../Navbar/Navbar";

function MyRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
