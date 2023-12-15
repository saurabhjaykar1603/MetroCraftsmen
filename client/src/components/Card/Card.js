import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({name,serviceName, contact, speciality, price, img}){
    return(
        <>
        <div className='ele-card-cont'>
           <div>
           <img src={img} alt='electrician image' className='card-imge'/>
           </div>
            
            <div className='discription-cont'>
            <h4 className='card-name'>{name}</h4>
            <p className='card-description'>{speciality}</p>
            <p className='card-contact'> Contact No :-{contact}</p>
            <p className='card-price'> Charges :- ₹ {price} /-</p>
           <Link to="/addappointment"> <button className='appoinment-btn'>Get Appointment</button></Link>
            </div>
            
        </div>
       
       
        </>
    )
}
export default Card
