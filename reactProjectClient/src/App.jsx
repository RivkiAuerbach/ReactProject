
import React, { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./components/users/Home";
import Login from "./components/admin/login";
import "./App.css";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Main2 from "./components/admin/main2";
export const IsAdminContext = createContext(null);
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const isAdminContext = { isAdmin, setIsAdmin };

  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&to=rivki5760@gmail.com&su=Question/Comment&body=Dear Site Administrator");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw" }}>
      <div>
        <IsAdminContext.Provider value={isAdminContext}>
          <Router>
             <nav>
              <p>
              <PersonOutlineOutlinedIcon/>  <Link to="/">LogOut    </Link>  
                <PersonOutlineOutlinedIcon/> <Link to="/login">LogIn</Link>
              </p>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />}  children=  {<Route path="/loginAdmin" element={<Main2 />} />}
             />
            </Routes>
            <Outlet />
          </Router>
        </IsAdminContext.Provider>
      </div>
      
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#f5f5f5",
          padding: "10px",
          display: "flex",
          // flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ marginRight: "10px " }}>The site was developed by Rivki Auerbach 12.2023        <IconButton onClick={handleEmailClick}>
          <EmailIcon />
        </IconButton></p>
       
       
   
    
      </div>
    </div>
  );
}

export default App;


