
import React from "react";
import { observer } from "mobx-react-lite";
import useMeetingsStore from "../dataStores/meeting";
import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './services.css'

const Meeting = observer(() => {
  const meetings = useMeetingsStore.meeting;

  const getColor = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const isToday = meetingDate.toDateString() === today.toDateString();
    const isThisWeek = meetingDate >= today && meetingDate <= addDays(today, 6);

    if (isToday) {
      return "#ff0000"; // Red
    } else if (isThisWeek) {
      return "#ffa500"; // Orange
    } else {
      return "#00ff00"; // Green
    }
  };

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  return (
    <>
     <div className="container">
     <h1 className="caption animate__animated animate__slideInLeft animate__delay-1s "  style={{ fontFamily: "Arial", fontSize: "28px", fontWeight: "bold", color: "#555", textTransform: "uppercase", letterSpacing: "1px", textAlign: "center" }}>Our Meetings</h1>  
     </div>
      {meetings
        .slice()
        .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
        .map((meeting) => (
          <Accordion
            key={meeting.id}
            sx={{
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: getColor(meeting.dateTime) ,fontSize: '3rem'}} />}
              sx={{ backgroundColor: "transparent" }}
            >
              <Typography sx={{ fontWeight: "bold " }}>{meeting.meetingType}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="body1">NAME: {meeting.name}</Typography>
                  <Typography variant="body1">PHONE: {meeting.phone}</Typography>
                  <Typography variant="body1">EMAIL: {meeting.email}</Typography>
                  <Typography variant="body1">DATETIME: {meeting.dateTime}</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>     
        ))}
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
    </>
  );
});

export default Meeting;
