import axios from 'axios';
import Swal from 'sweetalert2';
import {runInAction, observable, computed, action, makeObservable} from 'mobx';
class meeting{
    
 _meeting=[];

constructor(){
makeObservable(this,{
_meeting:observable,
AddMeeting:action,
meeting:computed,

});
this.InitMeeting();
}

InitMeeting()
{   
    axios.get("http://localhost:8787/appointments").then(res=>{
        this._meeting=res.data;
    }).catch(error => {
        console.log(error);
      });
}

get meeting()
{
    return this._meeting;    
}

AddMeeting(meet)
{
    axios.post("http://localhost:8787/appointment", meet) 
   .then((res)=>{
      this._meeting.push(meet); 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });  
    }).catch((error)=>{
      console.log(error);
      Swal.fire({
        title: "Oops, the date is taken, please set another date",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });    
    }
    )
}

}
export default new meeting();