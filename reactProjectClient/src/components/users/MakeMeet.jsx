
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import useServicesStore from "../dataStores/Services";
import useMeetingStore from "../dataStores/meeting";
import HttpsIcon from '@mui/icons-material/Https';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { Container, Typography, Grid } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
const StyledModal = ({ open, onClose, children }) => (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 400 }}>{children}</div>
    </Modal>
  );

const StyledModalContent = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: "white",
      borderRadius: "4px",
    }}
  >
    {children}
  </div>
);

const MakeMeet = observer(() => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  
   const meet={
        name:name,
        phone:phone,
        email:email,
        dateTime:date,
        meetingType:meetingType
    } 
    useMeetingStore.AddMeeting(meet);
    setName("");
    setPhone("");
    setEmail("");
    setDate("");
    setSelectedHour("");
    setMeetingType("");
    handleCloseModal();

  };

  return (
    <>
  <IconButton onClick={handleOpenModal} >
     <CreateIcon style={{ fontSize: 80 }} />
    </IconButton>
      <StyledModal open={isModalOpen} onClose={handleCloseModal}>
        <StyledModalContent>
       
 <TextField  type="text" fullWidth label="name" id="fullWidth"  value={name}   onChange={(e) => setName(e.target.value)}/>
         
 <TextField  type="text" fullWidth label="phone" id="fullWidth"   value={phone}   onChange={(e) => setPhone(e.target.value)}/>
          
<TextField  type="email" fullWidth label="email" id="fullWidth"    value={email}    onChange={(e) => setEmail(e.target.value)}/>
          
<TextField   type="dateTime-local" fullWidth label="date" id="fullWidth"      value={date}     onChange={(e) =>{ setDate(e.target.value);    
            }}
              InputLabelProps={{
                shrink: true,
              }}/>
          <FormControl>
            <InputLabel>Meeting Type</InputLabel>         
              <Select value={meetingType} onChange={(e)=>setMeetingType(e.target.value)}>
                 {useServicesStore.services.map((option) => (
                 <MenuItem key={option.id} value={option.name}>
                  {option.name}
                  </MenuItem>
                  ))}
              </Select>
          </FormControl>
          <Button variant="contained" onClick={handleFormSubmit}>
            Submit
          </Button>
        </StyledModalContent>
     </StyledModal>
</>)
});
export default MakeMeet;






