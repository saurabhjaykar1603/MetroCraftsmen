import React,{useState,useEffect} from 'react'
import "./Plumber.css";
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

function Plumber() {
  const [plumbers, setPlumber] = useState();

  const loadPlumber = async () => {
    try {
      const response = await axios.get("/api/v1/services/plumber");
      setPlumber(response?.data?.data);
    }
    catch (err) {
      console.log(err);
      alert("Error loading Plumber");
    }

  };

  useEffect(() => {
    loadPlumber();
  }, [])
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_873,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1699522519517-6d1e4c.jpeg' alt='plumber image' className='plumber-image'/>
      </div>
     <div className='plumber-container'>
     {
          plumbers?.map((plumber, index) => {

            const { name, serviceName,contact, speciality, price, img } = plumber;

            return (<Card
              key={index}
              name={name}
              serviceName={serviceName}
              contact={contact}
              speciality={speciality}
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

export default Plumber
