import React from "react";
import mySkillsImg1 from "../assets/pic1.jpg";
import mySkillsImg2 from "../assets/pic2.jpg";

const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* <h2 className="mb-4 text-center">About Me</h2> */}
        <div className="row d-flex align-items-start">
          <div className="col-md-6">
            <h4 className="mb-3">About Me</h4>
            <p>
              I am a dedicated ophthalmologist with extensive experience in
              cataract, refractive, and vitreoretinal surgery, committed to
              providing high-quality eye care to my community. With over a
              decade of clinical expertise, I specialize in advanced surgical
              techniques and the management of complex retinal diseases.
            </p>
            <br />
            <h4 className="mb-3">Education & Training</h4>
            <ul>
              <li className="mb-2">
                <b>MBBS</b> – Gandhara University, Khyber Medical College (2010){" "}
              </li>
              <li className="mb-2">
                <b>House Job</b> – Lady Reading Hospital & Khyber Teaching
                Hospital (2011){" "}
              </li>
              <li className="mb-2">
                <b>FCPS (Ophthalmology) Part 1 & 2</b> – Completed in 2012 &
                2017, respectively, with hands-on training in diverse ophthalmic
                surgeries.{" "}
              </li>
              <li className="mb-2">
                <b>Vitreoretinal Fellowship</b> – Hayatabad Medical Complex
                (2018), specializing in retinal detachment, advanced diabetic
                eye disease, and congenital retinal disorders.{" "}
              </li>
              <li className="mb-2">
                <b>
                  Fellow of the International Council of Ophthalmology (FICO)
                </b>{" "}
                – 2018{" "}
              </li>
              <li className="mb-2">
                <b>
                  Membership of the Royal College of Surgeons of Edinburgh (MRCS
                  Ed)
                </b>{" "}
                – 2019{" "}
              </li>
            </ul>
            <br />
            <h4 className="mb-3">Professional Experience</h4>

            <ul>
              <li className="mb-2">
                Performed <b>3,000+ cataract surgeries (Phaco)</b>.
              </li>
              <li className="mb-2">
                Pioneered refractive laser procedures (PRK, Femto-LASIK, ReLEx
                SMILE).
              </li>
              <li className="mb-2">
                <b>CEO & Founder</b> – <b>Atiq Eye Care</b>
              </li>
            </ul>
            <p>
              Leading efforts to promote accessible eye healthcare through
              advanced surgical solutions and community outreach.{" "}
            </p>
            <br />
            <h4 className="mb-3">Specializations</h4>

            <ul className="list-unstyled">
              <li className="mb-2">
                ✔ Cataract & Refractive Surgery (Phaco, Laser Vision Correction)
              </li>
              <li className="mb-2">
                ✔ Vitreoretinal Diseases (Diabetic Retinopathy, Retinal
                Detachment)
              </li>
              <li className="mb-2">
                ✔ Pediatric & Congenital Retinal Disorders
              </li>
            </ul>
            <br />
            <h4 className="mb-3">Mission</h4>
            <p>
              To combine cutting-edge technology with compassionate care,
              ensuring optimal vision and eye health for every patient.{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-start">
            <div className="mb-3">
              <img
                src={mySkillsImg1}
                alt="Skills 1"
                className="img-fluid rounded shadow"
              />
            </div>
            <div>
              <img
                src={mySkillsImg2}
                alt="Skills 2"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
