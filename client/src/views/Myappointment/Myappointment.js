import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import "./Myappointment.css";
import Footer from "../../components/Footer/Footer.js";
// import img1 from "./"

function Myappointment() {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);

  const loadAppointment = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;
    if (!userId) {
      return;
    }
    const response = await axios.get(`/api/v1/appointments/${userId}`);
    setAppointments(response?.data?.data);
    console.log(response?.data?.data);
  };

  useEffect(
    () => {
      loadAppointment();
    },
    [user],
    [appointments]
  );

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storageUser?.email) {
      setUser(storageUser);
    } else {
      alert("You are not logged in!");
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <div>{/* <img src={img1}/> */}</div>
        <div className="my-appoinment-container">
          {appointments?.map((appointment, index) => {
            const {
              user,
              userLocation,
              serviceProvider,
              serviceProviderContact,
              appointmentDate,
            } = appointment;

            const SERVICE_PROVIDER = {
              el: "Electrician ",
              plb: " Plumber",
              crp: "Carpenter",
            };
            return (
              <div className="myappointment-card" key={index}>
                <h2 className=" text-center info-apt">
                  Appointment Information⤵
                </h2>
                <h2 className="name"> Appoinment By {user.name}</h2>
                <h3 className="text-center select-serivce">
                  {" "}
                  ✔ Selected Service is {SERVICE_PROVIDER[serviceProvider]}
                </h3>
                <h2 className="text-center location">
                  ⦿ Location: {userLocation}{" "}
                </h2>

                <h2 className="text-center hr-cnt">
                  Contact Here📞:
                  <span className=" cnt">{serviceProviderContact}</span>
                </h2>
                <h3 className="text-center date">Date:{appointmentDate}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Myappointment;
