//hook
import MediaQuery, { useMediaQuery } from "react-responsive";
import { StateMachineProvider, createStore } from "little-state-machine";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

//components
import FormAside from "./assets/components/formAside";
import SectionInfo from "./assets/components/SectionInfo";
import SectionPlan from "./assets/components/SectionPlan";
import SectionAccessories from "./assets/components/accessories";
import SEctionFinishing from "./assets/components/SectionFinishing.jsx";
import { SectionThank } from "./assets/components/sectionThank";

//css
import "./App.css";

createStore({
  data: {
    radio_plan: "",
    plan_type: "",
    cost_plan: 9,
    accessories: [],
  },
  section: "info",
});

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const isMovile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <BrowserRouter>
      <StateMachineProvider>
        <header className="header">{isMovile && <FormAside />}</header>
        <div className="App form_card" role="main">
          {isDesktop && <FormAside />}
          <Routes>
            <Route path="/multi-step-form-main" element={<SectionInfo />} />
            <Route path="/planes" element={<SectionPlan />} />
            <Route path="/accesories" element={<SectionAccessories />} />
            <Route path="/finish" element={<SEctionFinishing />} />
            <Route path="/thanks" element={<SectionThank />} />
          </Routes>
        </div>
      </StateMachineProvider>
    </BrowserRouter>
  );
}

export default App;
