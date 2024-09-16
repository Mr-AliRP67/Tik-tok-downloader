import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Appple from '../../assset/AppStore.png';
import Google from '../../assset/googlePlay.png';
import './AppStore.css';
const AppStore = () => {
  const [data, setdata] = useState();
 /* useEffect(()=>{
   axios.get('https://reqres.in/api/users?page=2').then(response=>{setMyData(response.data.data)
    console.log(response.data);
   }
    
  ).catch(error=>{console.log(error);})
  },[])*/
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      setdata(response.data)
      console.log(response);
    }).catch(err=>console.log(err));
  }, []);

  return (
    <div className='container text-dark ' id='container'>
      <div className="row">
        <div className="col-sm-12  col-md-12 col-lg-12 col-12  " id='col'>
          <h4>Download SnapTik App</h4>
          <p>I now provide an app for downloading TikTok videos. It is fast, easy, with no watermark and HD quality</p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 col-12" >
          <div className="center">
            <img src={Google} alt="" className='img' width='165px' height='48px' />
            <img src={Appple} alt="" width='143px'  height='48px'/>
          </div>


        </div>
      </div>
      
 
    </div>
  )
}

export default AppStore;