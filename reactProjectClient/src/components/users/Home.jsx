
import React, { useState } from 'react';
import bussinesStore from "../dataStores/bussines";
import { observer } from "mobx-react-lite";
import { Avatar, Card, CardContent, Grid, Hidden, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { IsAdminContext } from "../../App";
import BusinessDetails from "../admin/bussinesDetails";
import Service from "../admin/services";
 import MakeMeet from './makeMeet';
import Home2 from './Home2'
import Footer from './Footer'

export default function Home(){
 
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv(currentDiv => (currentDiv === 1 ? 2 : 1));
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  const count=1;
  const setIsAdmin = useContext(IsAdminContext).setIsAdmin;
  useEffect(() => {
     setIsAdmin(false); 
  },);
  function pnina(){
    window.location.reload();
  }   
  return (
    <>  
    
   
  <div style={{ height: "100vh", overflowY: "scroll",width:'100%' ,overflowX:'hidden'}}>
         <div>
      {currentDiv === 1 ? (
        
        <div style={{ height: 350, width: '100vw', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(dis.jpg)', fontSize: 20, overflowX: 'hidden' }}>
    <BusinessDetails/> 
</div>
    
      ) : (
        <div style={{ height: 350, width: '100vw', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(dis.jpg)', fontSize: 20, overflowX: 'hidden' }}>
        <Home2/>
      </div>
      )}
    </div>
        <br></br>
        <br></br>
        <br></br>
       <Service />    
       <Footer/> 
        <br></br>
        <br></br>
        <br></br>
    </div>
  
  
    </>
  );
}




  
    