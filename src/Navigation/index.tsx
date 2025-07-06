
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../Home/index";
import Login from "../Login/index";
import Signup from "../SignUp";

const Navigation = () => {

 
  return (
    <Routes>
      <Route
        path="/home"
        element={<Home/>}
      />

      <Route path="/" element={ <Login />} />
      <Route path="/signup" element={<Signup/>}/>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Navigation;
