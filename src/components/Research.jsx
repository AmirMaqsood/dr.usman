import React from "react";
import { useNavigate } from "react-router-dom";

const Research = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate("/contact");
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Title and Button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Research</h4>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleBookConsultation}
            style={{ borderRadius: "30px", fontWeight: "600" }}
          >
            Book Consultation
          </button>
        </div>

        <div className="row">
          <div className="col-md-6">
            <ul>
              <li className="mb-3">
                Comparison Of lntravitreal Bevacizumab And Triamcinolone
                Acetonide With lntravitreal Bevacizumab Alone In Macular Edema
                Secondary To Central Retinal Vein Occlusion", Khyber Medical
                University Journal, January-March 2021.
              </li>
              <li className="mb-3">
                "Changing trends in techniques of cataract surgery in adults
                over a period of five years", Khyber Journal Of Medical
                Sciences, January-April, 2019.
              </li>
              <li className="mb-3">
                "Intra Operative Complications During Vitrectomy Performed By
                Post Graduate Resident'', Journal Of Postgraduate Medical
                Institute, November 2019.
              </li>
              <li className="mb-3">
                "Ocular Trauma in Children Admitted to Eye Department in a
                Tertiary Care Hospital", Ophthalmology Update, April - June
                2019.
              </li>
              <li className="mb-3">
                "Medical Calls Written to Ophthalmologists for Consultation by
                Various Faculties", AI-Shifa Journal of Ophthalmology, July -
                September 2018.
              </li>
              <li className="mb-3">
                "Papilledema In Meningitis In Paediatric Patients Admitted At A
                Tertiary Care Hospital, Peshawar", Al-Shifa Journal of
                Ophthalmology, April-June 2018.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
