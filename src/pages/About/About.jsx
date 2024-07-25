import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import history from "../../utilities/images/1995-62-071.jpg";
import vision from "../../utilities/images/vision.jpeg";
import john from "../../utilities/images/john.jpeg";
import sport from "../../utilities/images/coll.jpg";
const About = () => {
  return (
    <div>
      <header className="h-100 min-vh-100 d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h1 className="text-center fw-semibold">About Us</h1>
          <p>
            "To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.""
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
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> Our History</h2>
              <p className="text-dark">
                "Founded in 1985, Springdale Public School has been steadfastly
                dedicated to delivering an exceptional standard of education and
                fostering the holistic development of its students. Over the
                years, our institution has grown from its humble beginnings into
                a leading educational establishment, committed to nurturing both
                the academic and personal growth of every student. Our mission
                has always been to create a supportive and dynamic learning
                environment where students can excel academically, develop
                crucial life skills, and cultivate their unique talents.
              </p>
              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={history} alt="Start Batch" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={vision} alt="Start Batch" className="img-fluid" />
            </div>
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark">Vision</h2>
              <p className="text-dark">
                "To create a learning environment that fosters academic
                excellence, critical thinking, and ethical values."
              </p>
              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark"> Mission</h2>
              <p className="text-dark">
                "To empower students with the knowledge, skills, and values
                needed to thrive in a dynamic world."
              </p>
              <Link to="/about">
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

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src={john}
                alt="Start Batch"
                className="img-fluid custom-image"
              />{" "}
            </div>
            <div className="col-lg-5">
              <h2 className="text-capitalize ">Principal's Message</h2>
              <p className="text-dark">
                "At Springdale, we believe in nurturing the potential of every
                student and guiding them towards a successful future."
              </p>
              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark">
                {" "}
                Infrastructure and Facilities:
              </h2>
              <p className="text-dark">
                <ul>
                  <li>"State-of-the-art science and computer labs"</li>
                  <li>"Spacious and well-equipped classrooms"</li>
                  <li>
                    "Library with a vast collection of books and digital
                    resources"
                  </li>
                  <li>
                    "Sports facilities including a playground, gymnasium, and
                    swimming pool"
                  </li>
                </ul>
              </p>
              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={sport} alt="Start Batch" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
