import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";


function Myappointment() {
  const [user, setUser] = useState({});

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
      </div>

      <h1>Myappointment</h1>
    </>
  );
}

export default Myappointment;
