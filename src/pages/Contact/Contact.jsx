import React from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  TextField,
  Button,
} from "@mui/material";

const Contact = () => {
  return (
    <div>
      <header className="h-100 min-vh-100 d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
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

      <div className="form">
        <form>
          <FormControl fullWidth isRequired mb={5} variant="outlined">
            <FormLabel>Name</FormLabel>
            <OutlinedInput
              type="text"
              errorBorderColor="red.600"
              name="name"
              label="Name"
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <FormLabel>Email</FormLabel>
            <OutlinedInput type="email" name="email" label="Email" />
          </FormControl>

          <FormControl fullWidth isRequired variant="outlined">
            <FormLabel>Subject</FormLabel>
            <OutlinedInput type="text" name="subject" label="Subject" />
          </FormControl>

          <FormControl fullWidth isRequired variant="outlined">
            <FormLabel>Message</FormLabel>
            <TextField multiline rows={4} name="message" />
          </FormControl>
          <Button variant="contained" color="primary" className="btn">
            Submit
          </Button>
          {/* Submit button or additional controls */}
        </form>
      </div>

      {/* Google Maps Embed */}
      <div className="google-map">
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.8575088667777!2d75.77627041563472!3d26.925273483129325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b59d43f387f%3A0x7d95baef7883b922!2sCivil%20Lines%2C%20Jaipur%2C%20Ajmer%20Road%2C%20Jaipur%2C%20Rajasthan%20302006!5e0!3m2!1sen!2sin!4v1629270183790!5m2!1sen!2sin"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
