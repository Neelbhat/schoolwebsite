import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Student.css";
import plantation from "../../utilities/images/plantation.jpeg";
import archery from "../../utilities/images/archery.jpeg";
import swim from "../../utilities/images/swimming.jpeg";
import games from "../../utilities/images/games.jpeg";
import coding from "../../utilities/images/coding.jpeg";
import environment from "../../utilities/images/envo.jpeg";
import astronomy from "../../utilities/images/astro.jpeg";
import literal from "../../utilities/images/                    Literary Society.png";
import swimer from "../../utilities/images/swimmer.jpeg";
import winner from "../../utilities/images/mth.jpeg";
import robo from "../../utilities/images/robotics.jpeg";
import lisa from "../../utilities/images/lisa.jpeg";
import ammy from "../../utilities/images/ami.webp";
import rajiv from "../../utilities/images/rajiv.jpeg";

const images = [plantation, archery, swim, games];

const Students = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <header
        className="h-100 min-vh-100 d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${images[currentImageIndex]})`,
        }}
      >
        <div className="container d-flex flex-column align-items-center">
          <h1 className="text-center fw-semibold">
            Life at Springdale Public School
          </h1>
          <p>
            "Welcome to Springdale Public School, where we nurture young minds
            for a brighter future."
          </p>
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
        <div className="container ">
          <h1> Our Esteemed Clubs!!</h1>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>Literary Society:</b>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={literal}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
          </div>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={environment}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>Environmental Club:</b>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
          </div>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>Astronomy Club:</b>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={astronomy}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
          </div>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={coding}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>Coding Club":</b>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container ">
          <h1> Our Esteemed Record Holders!!</h1>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>John Smith:</b>
                    <h3> National Level Math Olympiad Winner"</h3>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={robo}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
          </div>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={swimer}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>Sarah Lee:</b>
                    <h3> "Gold Medalist in State Swimming Championship"</h3>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
          </div>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>Tech Innovators Club:</b>
                    <h3> " Winners of Inter-School Robotics Competition "</h3>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={robo}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
          </div>
        </div>

        <div className="container ">
          <h1> Student council !!</h1>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b> President:</b>
                    <h3> Amy Parker, Grade 12</h3>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={ammy}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
          </div>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={rajiv}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>Vice President:</b>
                    <h3> Rajiv Mehta, Grade 11</h3>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
          </div>

          <div
            className="row d-flex align-items-center justify-content-around"
            style={{
              border: "2px solid #bc2529",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          >
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> </h2>
              <p
                className="text-dark "
                style={{
                  padding: "2px 0px 2px 21px",
                }}
              >
                <h3>
                  <li>
                    <b>Secretary:</b>
                    <h3> Lisa Wong, Grade 10</h3>
                  </li>
                </h3>
              </p>
              <Link to="/students">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={lisa}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
