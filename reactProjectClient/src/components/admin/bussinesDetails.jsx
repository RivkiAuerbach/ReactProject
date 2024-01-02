
import  { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import bussinesStore from '../dataStores/bussines';
import { createContext,  useContext } from 'react';
import { IsAdminContext } from '../../App';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
import Sheet from '@mui/joy/Sheet';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
const BusinessDetails = observer(() => {
  const [bus, setBus] = useState(bussinesStore.bussines);
  const [changeMode, setChangeMode] = useState(false);
  const {register, handleSubmit} = useForm({defaultValues: bus});
  const isAdmine = useContext(IsAdminContext).isAdmin;
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  async function image() {
  try {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        "accept": "image/*",
        "aria-label": "Upload your profile picture"
      }
    });
    
    if (file) {
      const reader = new FileReader();    
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture"
        });
   
        setBus({ ...bus, logo: e.target.result.toString() });
      };
      
      reader.readAsDataURL(file);
    }
  } catch (error) {
    console.error(error);
  }
}
  function save(data) {  
  const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  title: "Change in successfully"
});
setTimeout(() => {
  setBus(prevBus => ({ ...prevBus, ...data, logo: prevBus.logo }));
  data.logo=bus.logo;
  bussinesStore.UpdataBussines(data);
  setChangeMode(false);
}, 1500); 

  }
  return (
    <>
          {changeMode ? (
             <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
               <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                  <Typography variant="h6">Change Business Details</Typography>
                   </Grid>
               </Grid>
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(save)}>
                  <p><TextField {...register('name')} label="Business Name" variant="outlined" /></p>
                  <p><TextField {...register('address')} label="Business Address" variant="outlined" /></p>
                  <p><TextField {...register('phone')} label="Business Phone" variant="outlined" /></p>
                  <p><TextField {...register('owner')} label="Business Owner" variant="outlined" /></p>
                  <p><TextField {...register('description')} label="Business Description" variant="outlined" /></p>
                  <Button type='submit'>Save</Button>
                </form>
            </DialogContent>
          </Dialog>
            </div>
          ) :
            (  <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
       <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          bgcolor: 'warning.300',
          
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
         <Grid item>
  {isAdmine&&<Avatar src={bus.logo} alt={bus.name} style={{ width: 270, height: 270, borderRadius: 0,cursor: 'pointer' }} onClick={() => { image() }}/>}
 {!isAdmine&&<Avatar src={bus.logo} alt={bus.name} style={{ width: 270, height: 270, borderRadius: 0 }} />}
</Grid>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg" style={{ color: '#4bc87d',fontSize:40}}>
           {bus.name}
          </Typography>
           <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary"  style={{ color: '#4bc87d',fontSize:20}}>
           {bus.description}
          </Typography> 
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                <PersonOutlineOutlinedIcon sx={{ fontSize: 60, color: 'blue', cursor: 'pointer', fontWeight: 'light' }}/>
                <br></br>
                name
              </Typography>
              <Typography fontWeight="lg">{bus.owner}</Typography>
            </div>
             <div>
               <Typography level="body-xs" fontWeight="lg">
                <LocalPhoneOutlinedIcon sx={{ fontSize: 60, color:  'blue', cursor: 'pointer', fontWeight: 'light' }}/>
                <br></br>
                 phone
               </Typography>
               <Typography fontWeight="lg">{bus.phone}</Typography>
            </div>
             <div>
               <Typography level="body-xs" fontWeight="lg">
                <GiteOutlinedIcon sx={{ fontSize: 60, color: 'blue', cursor: 'pointer', fontWeight: 'light' }}/>
                <br></br>
                 address
               </Typography>
             <Typography fontWeight="lg">{bus.address}</Typography>
             </div>
           </Sheet>
        {isAdmine&&
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral"  onClick={() => {
           setChangeMode(true);
          }}>
             Update </Button>
           </Box>}
     </CardContent>
      </Card>
     </Box>   )   
                  }
                </>
              );
            });
            
 export default BusinessDetails;
