import React from "react";
import { Link } from "react-router-dom";
import start from "../../utilities/images/start.jpeg";
import Section from "../../components/section/section";
import "./Home.css";
import { Card } from "react-bootstrap";
import Banner1 from "../../utilities/images/Sports-Day-D.jpg";
import Banner2 from "../../utilities/images/fest.jpg";
import Banner3 from "../../utilities/images/science.webp";

const banners = [
  {
    id: 1,
    img: Banner1,
    title: "Annual Sports Day - Celebrating Excellence in Sports",
    description:
      "Springdale Public School celebrated its Annual Sports Day with unparalleled enthusiasm and energy. The event, which took place on our school grounds, was a spectacular display of athleticism, teamwork, and school spirit. The day commenced with a vibrant opening ceremony, featuring a parade of students representing their respective houses, and captivating performances that set the tone for the day’s festivities.",
  },
  {
    id: 2,
    img: Banner2,
    title: "Cultural Fest - Embracing Diversity and Creativity",
    description:
      "Springdale Public School hosted its Annual Cultural Fest, a vibrant and colorful celebration of arts, culture, and creativity. The event, held on our school campus, was a showcase of the incredible talents and rich traditions of our students. The fest kicked off with a dazzling opening ceremony, featuring traditional dances and musical performances that set the stage for a day filled with cultural richness and artistic expression.",
  },
  {
    id: 3,
    img: Banner3,
    title: "Science Exhibition - Showcasing Student Innovations",
    description:
      "Springdale Public School hosted its Annual Science Exhibition, an inspiring event that highlighted the curiosity, creativity, and scientific prowess of our students. The exhibition, held on our school campus, was a celebration of innovation, experimentation, and the wonders of science. The exhibition began with an engaging opening ceremony, featuring a keynote address by a distinguished guest speaker who emphasized the importance of scientific inquiry and exploration.",
  },
];

const Home = () => {
  return (
    <div className="home">
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

      <div className="py-5">
        <Section />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize text-dark">2024 Batch Start</h2>
              <p className="text-dark">
                We are thrilled to announce that admissions for the 2024
                academic year are now open! At Springdale Public School, we are
                committed to providing an exceptional educational experience
                that nurtures the intellectual and personal growth of our
                students.
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
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={start} alt="Start Batch" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5"></div>

      <div className="banners text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Latest on the Banners
          </h2>
          <div className="row g-4 scale-hover-effect">
            {banners.map((banner) => (
              <div key={banner.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={banner.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{banner.title}</Card.Title>
                      <Card.Text>{banner.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
