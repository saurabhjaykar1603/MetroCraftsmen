import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import addPng from "./Construction worker-amico.png";
import axios from "axios";
import showToast from "crunchy-toast"
function Addappointment() {
  const [user, setUser] = useState({});
  const [userLocation, setUserLocation] = useState("pune");
  const [serviceProvider, setServiceProvider] = useState("el");
  const [serviceProviderContact, setServiceProviderContact] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
   if(storageUser?.email){
    setUser(storageUser);
   }else{
    alert("You are not logged in!");
    window.location.href = "/login";
   }
 
}, [])
  const PostAppointMent = async () => {
    if (!userLocation) {
      showToast("User Locationunt is required", "alert", 4000);
      return;
    }
    if (!serviceProvider) {
      showToast("Service Provider Type is required", "alert", 4000);
      return;
    }
    if (!serviceProviderContact) {
      showToast("Service Provider Contact is required", "alert", 4000);
      return;
    }
    if (!appointmentDate) {
      showToast("Appointment Date is required", "alert", 4000);
      return;
    }
    const user = JSON.parse(localStorage.getItem("user" || "{}"));
    const response = await axios.post(`api/v1/appointments`, {
      user: user._id,
      userLocation,
      serviceProvider,
      serviceProviderContact,
      appointmentDate,  
    });
    console.log(response?.data);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <h1 className="text-center mt-3  ">
        Add Appointment{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          fill="currentColor"
          class="bi bi-bookmark-plus-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"
          />
        </svg>
      </h1>

      <div
        class="container-fluid m-auto "
        style={{ backgroundColor: "#fffafa" }}
      >
        <div class=" row main ">
          <div class="col-md-6 right">
            <div class="singup-head-img-holder">
              <img
                src={addPng}
                alt=""
                class="img-fluid mx-auto d-block "
                style={{ width: "530px" }}
              />
            </div>
          </div>
          <div class="col-md-6 right ">
            <div class="input-box mt-5">
              <header className="my-3 fs-4">
            <div class="input-box mt-2">
              <header className="mb-3 fs-4">
                ⦿ User Location{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  fill="currentColor"
                  class="bi bi-geo-alt text-danger"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>{" "}
              </header>
              <div class="input-field mt-1">
                <input
                  type="text"
                  class="form-control w-50"
                  id="location"
                  autocomplete="off"
                  placeholder="Enter Your Location "
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                />
              </div>
              <div className="">
                <header className="my-4 fs-4">⦿ Select Service Here : </header>

                <div class="input-field d-flex justify-content-evenly w-75 ">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadio1"
                      value="el"
                      onChange={(e) => setServiceProvider(e.target.value)}
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="exampleRadio1"
                    >
                      Electrician{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-lightning-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
                      </svg>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadio2"
                      value="plb"
                      onChange={(e) => setServiceProvider(e.target.value)}
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="exampleRadio2"
                    >
                      Plumber{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-droplet-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                      </svg>
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadio3"
                      value="crp"
                      onChange={(e) => setServiceProvider(e.target.value)}
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="exampleRadio3"
                    >
                      Carpenter{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-tree"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z" />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <header className="my-4 fs-4">
              ⦿ Set a Date {" "}  &nbsp;
              ⦿ Set a Date &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="currentColor"
                class="bi bi-calendar-date-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
              </svg>
            </header>
            <div class="input-field ">
              <input
                type="date"
                class="form-control w-50"
                id="location"
                autocomplete="off"
                placeholder="Enter Your Contact "
                value={appointmentDate}
                onChange={(e) => {
                  setAppointmentDate(e.target.value);
                }}
              />
            </div>
            <div className=" w-75 my-4">
              <label htmlFor="selectOption " className="fs-4">

                ⦿ Choose a one Contact Number {" "} &nbsp;

                ⦿ Choose a one Contact Number &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </label>
              <select
                className="form-control mt-4 w-50 "
                id="selectOption"
                onClick={(e) => setServiceProviderContact(e.target.value)}
              >
                <option disabled defaultChecked>
                  Choose
                </option>
                <option value="+91 8765456787">+91 8765456787</option>
                <option value="+91 4456778655">+91 4456778655</option>
                <option value="+91 4567895467">+91 4567895467</option>
              </select>
            </div>
            <button className="btn btn-dark" type="button" onClick={PostAppointMent}>
              Add Appoinment
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addappointment;
