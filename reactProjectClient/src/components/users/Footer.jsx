import HttpsIcon from '@mui/icons-material/Https';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { Container, Typography, Grid } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function Footer() {
  return (
    <Container sx={{ marginTop: 4 }} style={{  width: '100vw' }}>    
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3} sx={{ textAlign: 'center' }}>
          <ConnectedTvIcon onClick={() => {}} sx={{ fontSize: 60, color: '#4bc87d', cursor: 'pointer', fontWeight: 'light' }} />
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
            <p>Opening a discount account</p>
          </Typography>
          <p>All benefits</p>
          <p>For new members</p>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ textAlign: 'center' }}>
          <VolunteerActivismIcon sx={{ fontSize: 60, color: '#4bc87d', cursor: 'pointer', fontWeight: 'light' }} />
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
            <p>Joining Discount@on the Internet</p>
          </Typography>
          <p>Easier and simpler than ever</p>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ textAlign: 'center' }}>
          <HttpsOutlinedIcon sx={{ fontSize: 60, color: '#4bc87d', cursor: 'pointer', fontWeight: 'light' }} />
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
            <p>Safe browsing</p>
          </Typography>
          </Grid>
          <Grid item xs={6} sm={3} sx={{ textAlign: 'center' }}>
    <ThumbUpOutlinedIcon sx={{ fontSize: 60, color: '#4bc87d', cursor: 'pointer', fontWeight: 'light' }} />
    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
      <p>optimal browsing experience</p>
    </Typography>
    <p>The conditions for optimal surfing</p>
  </Grid>
</Grid>
<br></br>
<br></br>
<br></br>
</Container>
)
}
