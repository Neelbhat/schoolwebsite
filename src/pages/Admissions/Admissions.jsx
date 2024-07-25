import React from "react";
import { Link } from "react-router-dom";
import "./Admissions.css";

const Admissions = () => {
  return (
    <div>
      <header className="h-100 min-vh-100 d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome to</h2>
          <h1 className="text-center fw-semibold">Springdale Public School</h1>
          <p>
            "Welcome to Springdale Public School, where we nurture young minds
            for a brighter future."
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/contact" className="text-decoration-none text-danger">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
            <Link to="/" className="text-decoration-none text-danger">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg mx-0 mx-sm-2 my-sm-0"
              >
                Home
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark">
                {" "}
                <b>Admissions </b>:
              </h2>
              <p className="text-dark">
                <ul>
                  <li>
                    <b> Process:</b> "Admission forms are available for
                    download. Submit the completed form along with required
                    documents at the school office."
                  </li>
                  <li>
                    <b>Criteria:</b> "Admission is based on merit and
                    availability of seats. Entrance tests may be conducted for
                    certain grades."
                  </li>
                  <li>
                    <b>Important Dates :</b>
                    <ul>
                      <li>"Admission Form Availability: March 1st"</li>
                      <li>"Last Date for Submission: March 31st"</li>
                      <li>"Entrance Test: April 15th"</li>
                      <li>"Announcement of Results: April 30th"</li>
                    </ul>
                  </li>
                </ul>
              </p>
              <Link to="/admissions">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
