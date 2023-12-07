import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import homeElImg from "./Electrician-bro.png";
import "./Home.css";
import ElectrictyImg from "./images/electrician.png";
import PlumberImg from "./images/plumber.png";
import CarpenterImg from "./images/carpenter.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center mt-5">
            <div className="container mt-5 ">
              <h1 className="text-element ms-5 mt-3">
                Welcome To{" "}
                <span className="fw-bold text-primary">Metro Crafts Men</span>
              </h1>
              <p className=" fs-5 ms-5">
                Transforming Homes with Expert Craftsmanship: Metro Crafts Men
                is your go-to destination for top-notch plumbing, electrical,
                carpentry, and AC services. Elevate your living space with our
                skilled professionals, where precision meets excellence, and
                your satisfaction is our priority."
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-evenly mt-4 flex-wrap">
            <div className="">
              <img
                src={ElectrictyImg}
                alt=""
                className="p-2 border border-black shadow-lg rounded-3 small-png"
              />
            </div>
            <div className="">
              <img
                src={PlumberImg}
                alt=""
                className="p-2 border border-black shadow-lg rounded-3 small-png"
              />
            </div>
            <div className="">
              <img
                src={CarpenterImg}
                alt=""
                className="p-2 border border-black shadow-lg rounded-3 small-png"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/addappointment">
              <button
                type="button"
                className="btn btn-dark px-5 rounded-2 py-2 fw-bold shadow-lg"
              >
                Add AppointMent
              </button>
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="">
            <img src={homeElImg} alt="" className=" img-element" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
