
import React, { useState } from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import BusinessDetails from "./bussinesDetails";
import Meeting from "./meeting";
import Service from "./services";
import { useContext, useEffect } from 'react';
import { IsAdminContext } from "../../App";

export default function Main2() {
  const setIsAdmin = useContext(IsAdminContext).setIsAdmin;
  useEffect(() => {
    setIsAdmin(true);
  });
  const [changeState, setChangeState] = useState(false);

  function change1() {
    setChangeState(true);
  }

  function change2() {
    setChangeState(false);
  }

  return (
    <div style={{ height: "100vh", overflowY: "scroll",width:'100%',overflowX:'hidden'}}>
    <div style={{ height: 350, width: '100vw', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(dis.jpg)', fontSize: 20, overflowX: 'hidden' }}>
    <BusinessDetails/> 
      </div>
      <ButtonGroup aria-label="button group" sx={{ mb: 2 }}>
            <Button onClick={change1} variant="outlined" style={{ borderRadius: "20px", marginRight: "8px" }}>Meeting</Button>
            <Button onClick={change2} variant="outlined" style={{ borderRadius: "20px", marginLeft: "8px" }}>Services</Button>
          </ButtonGroup>

          {!changeState ? (
            <>
               <Service />
               <br />
             </>
          ) : (
            <div style={{overflowX:"scroll"}}>
            <Meeting />
            </div>
          )}
    </div>
    
  );
}

