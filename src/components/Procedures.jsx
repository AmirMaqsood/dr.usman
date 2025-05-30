import React from "react";
import { useNavigate } from "react-router-dom";

const Procedures = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate("/contact");
  };

  return (
    <section className="py-5">
      <div className="container">
        {/* Flex container for title and button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Procedures</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleBookConsultation}
            style={{ borderRadius: "30px", fontWeight: "600" }}
          >
            Book Consultation
          </button>
        </div>

        <div className="row ">
          <h5>
            Cataract & Refractive Surgery (Phaco, Laser Vision Correction)
          </h5>
          <p>
            Advanced procedures like Phacoemulsification and Laser Vision
            Correction to restore clear vision. These treatments reduce
            dependence on glasses and improve overall visual quality.
          </p>

          <h5>
            Vitreoretinal Diseases (Diabetic Retinopathy, Retinal Detachment)
          </h5>
          <p>
            Diabetic Retinopathy and Retinal Detachment involve the deeper
            layers of the eye. Specialized treatment is essential to prevent
            vision loss and maintain retinal health.
          </p>

          <h5>Pediatric & Congenital Retinal Disorders</h5>
          <p>
            Inherited or early-onset conditions affecting the retina in
            children. These disorders can impact vision development and often
            require specialized care for effective management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
