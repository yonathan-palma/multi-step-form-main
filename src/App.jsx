//hook
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import MediaQuery, { useMediaQuery } from "react-responsive";

//components
import FormAside from "./assets/components/formAside";
import SectionInfo from "./assets/components/SectionInfo";
import SectionPlan from "./assets/components/SectionPlan";
import SectionAccessories from "./assets/components/accessories";
import SEctionFinishing from "./assets/components/SectionFinishing.jsx";
import { SectionThank } from "./assets/components/sectionThank";
import Footer from "./assets/components/Footer";

//css
import "./App.css";

function App() {
  // const {register, handleSubmit} = useForm();
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const isMovile = useMediaQuery({ query: "(max-width: 768px)" });

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    radio_plan: "arcade",
    plan_type: "monthly",
    cost_plan: 9,
    accessories: [],
  });

  const [section, setSection] = useState("info");
  const sections = ["info", "plan", "accessories", "finishing", "thank"];

  const handleSubmit = (e) => {
    // e.target.submit();
    // setSection();
  };
  const updateSection = () => {
    const indexSection = sections.findIndex("section");
    setSection(sections[indexSection + 1]);
  };

  return (
    <>
      <header className="header">
        {isMovile && <FormAside section={section} />}
      </header>
      <div className="App form_card" role="main">
        {isDesktop && <FormAside section={section} />}
        <div className="form_content">
          <form onSubmit={handleSubmit}>
            {section == "info" && (
              <SectionInfo
                setValues={setValues}
                values={values}
                setSection={setSection}
              />
            )}
            {section == "plan" && (
              <SectionPlan
                setValues={setValues}
                values={values}
                setSection={setSection}
              />
            )}
            {section == "accessories" && (
              <SectionAccessories
                setValues={setValues}
                values={values}
                setSection={setSection}
              />
            )}
            {section == "finishing" && (
              <SEctionFinishing
                setValues={setValues}
                values={values}
                setSection={setSection}
              />
            )}
            {section == "thank" && (
              <SectionThank setValues={setValues} setSection={setSection} />
            )}
          </form>
        </div>
      </div>
      {/* { isMovile && <Footer /> } */}
    </>
  );
}

export default App;
