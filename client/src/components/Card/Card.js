import React from 'react';
import './Card.css';

function Card({name, contact, description, price, img}){
    return(
        <>
        <div className='ele-card-cont'>
           <div>
           <img src={img} alt='electrician image' className='card-imge'/>
           </div>
            
            <div className='discription-cont'>
            <h4 className='card-name'>{name}</h4>
            <p className='card-description'>{description}</p>
            <p className='card-contact'> Contact No :-{contact}</p>
            <p className='card-price'> Charges :- ₹ {price} /-</p>
            </div>
        </div>
       
        </>
    )
}
export default Card
