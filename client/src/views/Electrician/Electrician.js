import React, { useState, useEffect } from 'react'
import "./Electrician.css"
import axios from 'axios';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Electrician() {
  const [electricians, setElectrician] = useState([]);

  const loadElectrician = async () => {
    try {
      const response = await axios.get("/api/v1/electricians");
      setElectrician(response?.data?.data);
    }
    catch (err) {
      console.log(err);
      alert("Error loading Electrician");
    }

  };

  useEffect(() => {
    loadElectrician();
  }, [])

  return (
    <div>
      <Navbar />
      {/* <h1 className='heading'>Electricians</h1> */}
      <div className='container'>
        <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_873,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701344190562-83cdb5.jpeg' alt='img' className='ele-image'/>
      </div>
      <div className='ele-container'>
        {
          electricians?.map((Electrician, index) => {

            const { name, contact, description, price, img } = Electrician;

            return (<Card
              key={index}
              name={name}
              contact={contact}
              description={description}
              price={price}
              img={img}
            />);


          })
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Electrician
