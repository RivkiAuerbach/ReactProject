
import { observable, computed, action, makeAutoObservable } from 'mobx';
import axios from 'axios';
class Services {
  
  _services =[];
    _services2=this._services=[{
    id: 1,
    name: "A meeting on savings for every child",
    price: 500,
    duration: 60,
    img: "src/assets/family1.jpg"
  },
  {
    id: 2,
    name: "A meeting on mortgage advice",
    price: 500,
    duration: 60,
    img:"src/assets/family2.jpg"
 
  },
  {
    id: 3,
    name: "A meeting on loans",
    price: 800,
    duration: 50,
    img: "src/assets/money2.jpg"

  },
  {
    id: 4,
    name: "meeting with a business client",
    price: 800,
    duration: 50,
    img: "src/assets/tower1.jpg"
  },
  {
    id: 5,
    name: "A meeting with a private lesson",
    price: 800,
    duration: 50,
    img: "src/assets/tower2.jpg"
  
  },
  {
    id: 6,
    name: "A meeting on foreign exchange rates",
    price: 800,
    duration: 50,
    img: "src/assets/money4.jpg"
  
  },
  {
    id: 7,
    name: "Banking meeting with the branch manager",
    price: 800,
    duration: 50,
    img: "src/assets/world.jpg"
  }];
  constructor() {
    makeAutoObservable(this, {
      _services: observable,
      services: computed,
      addService: action,
      updateService: action,
      deleteService: action
    });
    this.initServices();
  }

initServices(){
  axios.get("http://localhost:8787/services")
      .then(res => {
        this._services =res.data; 
       if(this._services.length==0){
        this._services2.map(ser=>{
          this.addService(ser);
        })
       }
      
      })
      .catch(error => {
        console.log(error);
      });
    
     
}
  get services() {
    return this._services;
  }

  addService(service) {
    axios.post("http://localhost:8787/service", service)
    .then((res)=>{
      console.log(res.status);
       this._services.push(service);
        
     }).catch((error)=>{
       console.log(error);    
     }
     )
  }
}

export default new Services();



