import React from "react";

const Specializations = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">What I Do</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h5>
              Cataract & Refractive Surgery (Phaco, Laser Vision Correction){" "}
            </h5>
            <p>
              Advanced procedures like PRK, Femto lasik, Smile Surgery,
              Phacoemulsification and Laser Vision Correction to restore clear
              vision. These treatments reduce dependence on glasses and improve
              overall visual quality.
            </p>
          </div>
          <div className="col-md-4">
            <h5>
              Vitreoretinal Diseases (Diabetic Retinopathy, Retinal Detachment){" "}
            </h5>
            <p>
              Diabetic Retinopathy and Retinal Detachment involve the deeper
              layers of the eye. Specialized treatment is essential to prevent
              vision loss and maintain retinal health.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Pediatric & Congenital Retinal Disorders </h5>
            <p>
              Inherited or early-onset conditions affecting the retina in
              children. These disorders can impact vision development and often
              require specialized care for effective management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
