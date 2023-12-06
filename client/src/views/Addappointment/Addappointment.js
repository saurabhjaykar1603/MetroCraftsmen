import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import addPng from "./Construction worker-amico.png";
function Addappointment() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <h1 className="text-center mt-3  ">Add Appointment</h1>

      <div class="container-fluid m-auto ">
        <div class=" row main">
          <div class="col-md-6 right">
            <div class="singup-head-img-holder">
              <img src={addPng} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6 right">
            <div class="input-box">
              <header className="my-3 fs-4">
                User Location{" "}
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
                  class="form-control w-75"
                  id="location"
                  autocomplete="off"
                />
              </div>
              <div className="">
                <header className="my-3 fs-4">Select Service Here : </header>

                <div class="input-field d-flex justify-content-evenly ">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadio1"
                      value="option1"
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
                      value="option2"
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="exampleRadio2"
                    >
                      Plumber
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadio3"
                      value="option3"
                    />
                    <label
                      className="form-check-label fw-bold"
                      htmlFor="exampleRadio3"
                    >
                      Carpenter
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addappointment;
