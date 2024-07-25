import React from "react";
import { Link } from "react-router-dom";
import "./Academics.css";
import aca from "../../utilities/images/cirr.png";

const Academics = () => {
  return (
    <div>
      <header className="h-100 min-vh-100 d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome to</h2>
          <h1 className="text-center fw-semibold">Academics</h1>

          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/contact" className="text-decoration-none text-danger">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-sm-0"
                style={{ marginBottom: "5px" }}
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
              <h2 className="text-capitalize text-dark"> Curriculum:</h2>
              <p className="text-dark">
                <ul>
                  <li>
                    <b> Primary (Grades 1-5):</b> English, Mathematics, Science,
                    Social Studies, Art, Physical Education
                  </li>
                  <li>
                    <b>Secondary (Grades 6-10):</b> English, Mathematics,
                    Science (Physics, Chemistry, Biology), Social Studies,
                    Computer Science, Physical Education, Art
                  </li>
                  <li>
                    <b>Senior Secondary (Grades 11-12):</b>
                    <ul>
                      <li>
                        <b>Science Stream:</b> Physics, Chemistry, Biology,
                        Mathematics, Computer Science, English
                      </li>
                      <li>
                        <b>Commerce Stream:</b> Accountancy, Business Studies,
                        Economics, Mathematics, English
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
              <Link to="/academics">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={aca} alt="Start Batch" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
