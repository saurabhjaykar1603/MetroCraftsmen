import React, { useState, useEffect } from 'react'
import "./Electrician.css"
import axios from 'axios';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';

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
      <h1>Electricians</h1>
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
    </div>
  )
}

export default Electrician
