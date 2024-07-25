import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import sports from "../../utilities/images/sp.jpeg";
import science from "../../utilities/images/science.webp";
import fest from "../../utilities/images/fest.jpg";
import room from "../../utilities/images/class.jpg";
import lib from "../../utilities/images/lib.jpeg";
import michael from "../../utilities/images/micheal.jpeg";
import Grid from "@mui/material/Grid";

const Gallery = () => {
  return (
    <div>
      <header className="h-100 min-vh-100 d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
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
          <h1> Here are some of ours memorable moments form gallery!!</h1>
          <h3>Images</h3>

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
                    <b>
                      Sports Day
                      <h4>
                        "Students participating in various sports events."
                      </h4>
                    </b>
                  </li>
                </h3>
              </p>
              <Link to="/gallery">
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
                src={sports}
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
                src={science}
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
                    <b>
                      Science Exhibition:
                      <h4>"Students presenting their science projects."</h4>
                    </b>
                  </li>
                </h3>
              </p>
              <Link to="/gallery">
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
                    <b>
                      Cultural Fest
                      <h4>"Students performing in the cultural fest."</h4>
                    </b>
                  </li>
                </h3>
              </p>
              <Link to="/gallery">
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
                src={fest}
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
                src={lib}
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
                    <b>
                      library
                      <h4>
                        "Students reading and studying in the school library."
                      </h4>
                    </b>
                  </li>
                </h3>
              </p>
              <Link to="/gallery">
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
                    <b>
                      classroom
                      <h4>"A glimpse of our interactive classrooms"</h4>
                    </b>
                  </li>
                </h3>
              </p>
              <Link to="/gallery">
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
                src={room}
                alt="Start Batch"
                className="img-fluid custom-image"
              />
            </div>
          </div>

          <h3>Videos</h3>

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
                    <b>
                      School Tour
                      <h4>"Virtual tour of Springdale Public School."</h4>
                    </b>
                  </li>
                </h3>
              </p>
              <Link to="/gallery">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Know More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/FUSJkqaHgYk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Embedded YouTube Video"
              ></iframe>
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
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/jUrrgYDUfrk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Embedded YouTube Video"
              ></iframe>
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
                    <b>
                      Annual Function
                      <h4>" Highlights from the Annual Function 2023."</h4>
                    </b>
                  </li>
                </h3>
              </p>
              <Link to="/gallery">
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
      </div>
    </div>
  );
};

export default Gallery;
