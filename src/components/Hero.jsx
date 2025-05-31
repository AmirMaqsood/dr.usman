import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profile.jpg"; // Replace with your own image

const Hero = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate("/contact");
  };

  return (
    <section
      className="text-white text-center py-5 position-relative"
      style={{ backgroundColor: "#8338ec" }}
    >
      <div className="container">
        <p className="fs-5"></p>
        <h1 className="display-4 fw-bold">Dr. Usman Attique</h1>
        <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
          MBBS ( Pak), MRCS Ed (Ophth,UK) FCPS (Ophth,Pak) FICO (Fellow of
          International Council of Ophthalmology, UK)
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
          Fellowship training in Vitreoretinal Ophthalmology
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
          Ophthalmologist | Vitreoretinal Specialist | CEO of Atiq Eye Care
        </p>
        <div className="mt-4">
          <img
            src={profileImage}
            alt="Amir Maqsood"
            className="rounded-circle border border-white"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              marginTop: "30px",
            }}
          />
        </div>
        {/* Book Consultation Button */}
        <div className="mt-4">
          <button
            type="button"
            className="btn btn-light text-primary fw-semibold px-4 py-2"
            style={{ borderRadius: "30px", fontWeight: "600" }}
            onClick={handleBookConsultation}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
