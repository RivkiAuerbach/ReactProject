
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import useServicesStore from "../dataStores/Services";
import 'animate.css';
import AddIcon from "@mui/icons-material/Add";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createContext,  useContext } from 'react';
import { IsAdminContext } from '../../App';
import './services.css'
import MakeMeet from '../users/MakeMeet'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import SingleService from'./SingleService';
const Service = observer(() => {

  const isAdmine = useContext(IsAdminContext).isAdmin;
  const [open, setOpen] = useState(false);
  const [newService, setNewService] = useState({
    id: "",
    name: "",
    price: "",
    duration: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (
      newService.name.trim() !== "" &&
      newService.price.trim() !== "" &&
      newService.duration.trim() !== ""
    ) {
      useServicesStore.addService(newService);
      setOpen(false);
      setNewService({
        id: "",
        name: "",
        price: "",
        duration: "",
        img:""
      });
    }
  };

  return (

    <>
    <div>
   
    <div className="container">
      <h1 className="caption animate__animated animate__slideInLeft animate__delay-1s " style={{ fontFamily: "Arial", fontSize: "28px", fontWeight: "bold", color: "#555", textTransform: "uppercase", letterSpacing: "1px", textAlign: "center" }}>Discount Bank services
           the leaders in the world</h1>
    </div>
      <div className="service-container">
      {useServicesStore.services.map((service) => (
        <SingleService  service={service} />
      ))} 
       {!isAdmine&&<div style={{width:350,height:290,backgroundColor:"#f0f0f0",display: "flex", justifyContent: "center", alignItems: "center" }}><MakeMeet/></div> }{isAdmine &&  <div style={{width:350,height:290,backgroundColor:'#f0f0f0',display: "flex", justifyContent: "center", alignItems: "center" }}><IconButton  style={{ fontSize: 60}} color="primary" onClick={handleOpen} >
      <AddIcon style={{ fontSize: 80 }}/>
    </IconButton></div>}
    
     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Service</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="ID"
            fullWidth
            value={newService.id}
            onChange={(e) =>
              setNewService({ ...newService, id: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={newService.name}
            onChange={(e) =>
              setNewService({ ...newService, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            value={newService.price}
            onChange={(e) =>
              setNewService({ ...newService, price: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Duration"
            fullWidth
            value={newService.duration}
            onChange={(e) =>
              setNewService({ ...newService, duration: e.target.value })
            }
          />
           <TextField
            margin="dense"
            label="img"
            fullWidth
            value={newService.img}
            onChange={(e) =>
              setNewService({ ...newService, img: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog></div>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     </div>
 
    </>
  );
});

export default Service;




