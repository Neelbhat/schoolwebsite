import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Section = () => {
  return (
    <div>
      <div className="container">
        <h2
          className="text-center mb-4 text-dark
        "
        >
          Why choose Springdale?
        </h2>
        <div className="row g-4">
          <div className="col-lg-4 ">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#dc3545"
                  class="bi bi-trophy-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  21 Trophies Received
                </Card.Title>
                <Card.Text className="text-center text-dark">
                  At Springdale Public School, we take pride in our remarkable
                  achievement of being honored as the "Most Productive School"
                  21 times.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 ">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#dc3545"
                  class="bi bi-trophy-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />{" "}
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  We Keep Our students Happy
                </Card.Title>
                <Card.Text className="text-center text-dark">
                  At Springdale Public School, we believe that a joyful learning
                  environment is the key to academic and personal success. Our
                  commitment to student happiness is reflected in every aspect
                  of school life.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 ">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#dc3545"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  10 Locations In India
                </Card.Title>
                <Card.Text className="text-center text-dark">
                  "Springdale Public School proudly extends its educational
                  excellence to multiple locations across India. With campuses
                  strategically located in 10 diverse regions
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
//  <Card className="border-0 w-100 text-center">
//               <div className="mt-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="40"
//                   height="40"
//                   fill="#dc3545"
//                   className="bi bi-trophy-fill"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
//                 </svg>
//               </div>
//               <Card.Body>
//                 <Card.Title className="text-center text-capitalize mb-3">
//                   2 trophies received
//                 </Card.Title>
//                 <Card.Text className="text-center">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Impedit, veniam.
//                 </Card.Text>
//               </Card.Body>
//             // </Card>
