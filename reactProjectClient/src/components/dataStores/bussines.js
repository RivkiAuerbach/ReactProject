import axios from 'axios';
import {runInAction, observable, computed, action, makeObservable} from 'mobx';
class bussines{

     _bussines = {};
     
    constructor()
    {
        makeObservable(this, {
          _bussines: observable,
            bussines: computed,
            UpdataBussines: action,
          });
          this.initData();
    }

    initData(){
      axios.get("http://localhost:8787/businessData")
      .then(res => {
        this. _bussines = res.data; 
        if(Object.keys(this. _bussines).length === 0){
          this. _bussines = {
             name: "Discont",
             address: "Ibn Gvirol 68 Tel Aviv",
             phone: "03-1234567",
             owner: "Yariv Katz",
             logo: "src/assets/discont3.jpg",
             description: "Discont - want you more",
        };
        
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
    
    get bussines()
    {
        return  this._bussines;
    }

    UpdataBussines(bus) {
      console.log("add serv " + JSON.stringify(bus));
        axios.post("http://localhost:8787/businessData", bus)  
          .then(res => {
            runInAction(() => {
            this._bussines = bus; });
          })
          .catch(error => {
            console.log(error);
          });
      }
}
export default new bussines();