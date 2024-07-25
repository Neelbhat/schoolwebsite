import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import john from "../../utilities/images/Sophia.jpeg"; //
import jane from "../../utilities/images/jane.jpeg";
import emily from "../../utilities/images/emilly.jpeg";
import michael from "../../utilities/images/micheal.jpeg";
import sophia from "../../utilities/images/john.jpeg";
import david from "../../utilities/images/david.jpeg";

const facultyData = [
  {
    name: "John Doe",
    title: "Principal",
    qualifications: "M.Ed",
    experience: "20 years of experience in educational administration.",
    image: john,
  },
  {
    name: "Jane Smith",
    title: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years of teaching experience.",
    image: jane,
  },
  {
    name: "Emily Johnson",
    title: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years of teaching experience.",
    image: emily,
  },
  {
    name: "Michael Brown",
    title: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience.",
    image: michael,
  },
  {
    name: "Sophia Davis",
    title: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience.",
    image: sophia,
  },
  {
    name: "David Wilson",
    title: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years of teaching experience.",
    image: david,
  },
];

const Students = () => {
  const [currentFacultyIndex, setCurrentFacultyIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFacultyIndex(
        (prevIndex) => (prevIndex + 1) % facultyData.length
      );
    }, 3000); // Change faculty member every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <header
        className="h-100 min-vh-100 d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${facultyData[currentFacultyIndex].image})`,
        }}
      >
        <div className="container d-flex flex-column align-items-center">
          <h1 className="text-center fw-semibold">
            Meet Our Esteemed Faculty Members
          </h1>

          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/contact" className="text-decoration-none text-danger">
              <button
                type="button"
                style={{ marginBottom: "5px" }}
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
        <div className="container ">
          <h1> Meet Our Esteemed Faculty Members!!</h1>
          <h3>Profiles</h3>

          {facultyData.map((faculty, index) => (
            <div
              key={index}
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
                <h2 className="text-capitalize text-dark">{faculty.name}</h2>
                <p className="text-dark">
                  <b>{faculty.title}</b>
                  <br />
                  {faculty.qualifications}, {faculty.experience}
                </p>
                <Link to="/faculty">
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
                  src={faculty.image}
                  alt={faculty.name}
                  className="img-fluid custom-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
