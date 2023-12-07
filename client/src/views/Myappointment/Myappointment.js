import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios'


function Myappointment() {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);

  const loadAppointment = async () => {
    const userId = user._id;
    if (!userId) {
      return;
    }



    const response = await axios.get(`/api/v1/appointments/${userId}`);
    try {
      setAppointments(response?.data?.data);
      // console.log(userId)
      console.log(user)
      console.log(response?.data.data);
      // console.log(appointments)

    }
    catch (e) {
      console.log(e.message);
    }


  }
  useEffect(() => {
    loadAppointment();
  }, [user]);

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
    if (storageUser?.email) {
      setUser(storageUser);
    } else {
      alert("You are not logged in!");
      window.location.href = "/login";
    }

  }, [])

  return (
    <>
      <div>
        <Navbar />
        <h1>Myappointment</h1>

        <div>
          {
            appointments?.map((appointment, index) => {
              const { user, userLocation, serviceProvider, serviceProviderContact, appointmentDate } = appointment
              return (
                <div className="appointment-card" key={index}>

                  {/* <Link to={`/buy/${product._id}`}>{product?.name}</Link> */}
                  <h2>{user}</h2>
                  <h2>{user?._id}</h2>
                  <h3>{userLocation}</h3>
                  <p>{serviceProvider}</p>
                  <h3>{serviceProviderContact}</h3>
                  <h3>{appointmentDate}</h3>
                </div>
              )
            })
          }

        </div>
      </div>


    </>
  );
}

export default Myappointment;
