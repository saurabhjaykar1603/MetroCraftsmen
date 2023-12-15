import React, { useEffect, useState } from 'react'
import "./Carpenter.css"
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import axios from 'axios';

function Carpenter() {
  const [carpenters,setCarpenter] = useState();

  const loadCarpenter = async () => {
try{
  const response = await axios.get("/api/v1/services/carpenter");
  setCarpenter(response?.data?.data);
}
catch(err){
   console.log(err);
   alert("Error loading carpenter");
}
  };

  useEffect(() => {
    loadCarpenter()
  },[])
  
  return (
   <>
   <Navbar/>
  <div className='container'>
    <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_873,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1695987492988-cf872a.jpeg'  alt='carpenter image' className='cra-img' />
    </div>
  <div className='cra-container'>
    {
      carpenters?.map((carpenter,index) => {
        const {name,serviceName, contact, speciality, price, img} = carpenter;

        return (
       <>
        <Card
        key={index}
        name={name}
        serviceName={serviceName}
        contact={contact}
        speciality={speciality}
        price={price}
        img={img}
        />
       </>
        );
      })
    }

  </div>
  <Footer/>

   </>
  )
}


export default Carpenter
