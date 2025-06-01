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
          <h2 className="m-0 mb-3">Procedures</h2>
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
          <h5 className="mb-3">Diagnostic Procedures</h5>
          <ol>
            <li className="mb-2">
              <b>Comprehensive Eye Exam</b> – Evaluates vision and checks for
              eye diseases.
            </li>
            <li className="mb-2">
              <b>Visual Acuity Test</b> – Measures clarity of vision using an
              eye chart (Snellen chart).
            </li>
            <li className="mb-2">
              <b>Refraction Test</b> – Determines prescription for glasses or
              contact lenses.{" "}
            </li>
            <li className="mb-2">
              <b>Slit-Lamp Examination</b> – Magnified view of eye structures
              (cornea, iris, lens, retina).{" "}
            </li>
            <li className="mb-2">
              <b>Tonometry</b> – Measures intraocular pressure (IOP) for
              glaucoma screening.{" "}
            </li>
            <li className="mb-2">
              <b>Ophthalmoscopy (Fundoscopy)</b> – Examines the retina and optic
              nerve.{" "}
            </li>
            <li className="mb-2">
              <b>Optical Coherence Tomography (OCT)</b> – Cross-sectional
              imaging of the retina.
            </li>
            <li className="mb-2">
              <b>Visual Field Test (Perimetry)</b> – Checks for peripheral
              vision loss.
            </li>
            <li className="mb-2">
              <b>Corneal Topography</b> – Maps the curvature of the cornea.
            </li>
            <li className="mb-2">
              <b>Fluorescein Angiography</b> – Evaluates blood flow in the
              retina using dye.
            </li>
            <li className="mb-2">
              <b>Ultrasound Biomicroscopy (UBM)</b> – High-resolution imaging of
              anterior eye structures.
            </li>
            <br />
            <h5 className="mb-3">Medical & Non-Surgical Treatments</h5>

            <li className="mb-2">
              <b>Prescription of Eyeglasses/Contact Lenses</b> – Corrects
              refractive errors.
            </li>
            <li className="mb-2">
              <b>Medication Injections</b> (e.g.,{" "}
              <b>
                Anti-VEGF for macular degeneration, steroids for inflammation
              </b>
              ).
            </li>
            <li className="mb-2">
              <b>Laser Therapy</b> (e.g., <b>YAG laser capsulotomy</b> for
              posterior capsule opacification).
            </li>
            <li className="mb-2">
              <b>Punctal Plugs</b> – For dry eye syndrome.
            </li>
            <br />
            <h5 className="mb-3">Laser & Surgical Procedures</h5>
            <li className="mb-2">
              <b>LASIK/PRK/SMILE</b> – Laser refractive surgery to correct
              myopia, hyperopia, or astigmatism.
            </li>
            <li className="mb-2">
              <b>Cataract Surgery</b> – Phacoemulsification with intraocular
              lens (IOL) implantation.
            </li>
            <li className="mb-2">
              <b>Glaucoma Surgery</b> (e.g., *Trabeculectomy, Tube Shunt, Laser
              Trabeculoplasty*).
            </li>
            <li className="mb-2">
              <b>Corneal Transplant (Keratoplasty)</b> – Full-thickness (PK) or
              partial (DSAEK/DMEK).
            </li>
            <li className="mb-2">
              <b>Vitrectomy</b> – Removal of vitreous gel for retinal issues
              (e.g., retinal detachment, vitreous hemorrhage).
            </li>
            <li className="mb-2">
              <b>Retinal Laser Surgery</b> (e.g., *Photocoagulation for diabetic
              retinopathy*).
            </li>
            <li className="mb-2">
              <b>Pterygium Excision</b> – Removal of a growth on the
              conjunctiva.
            </li>
            <li className="mb-2">
              <b>Eyelid Surgery (Blepharoplasty)</b> – For droopy eyelids
              (ptosis) or cosmetic correction.
            </li>
            <li className="mb-2">
              <b>Strabismus Surgery</b> – Corrects misaligned eyes.
            </li>
            <li className="mb-2">
              <b>Lacrimal (Tear Duct) Surgery</b> – For blocked tear ducts (DCR
              - Dacryocystorhinostomy).
            </li>
            <li className="mb-2">
              <b>Intravitreal Injections</b> – For macular degeneration,
              diabetic retinopathy, or retinal vein occlusion.
            </li>
            <li className="mb-2">
              <b>Cross-Linking (CXL)</b> – For keratoconus to strengthen the
              cornea.
            </li>
            <li className="mb-2">
              <b>Iridotomy</b> – Laser procedure for narrow-angle glaucoma.
            </li>
            <br />
            <h5 className="mb-3">Diagnostic Procedures</h5>
            <li className="mb-2">
              <b>Amblyopia (Lazy Eye) Treatment</b> – I Patching or atropine
              therapy.
            </li>
            <li className="mb-2">
              <b>Congenital Cataract Surgery</b>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
