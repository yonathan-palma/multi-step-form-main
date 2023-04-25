// hook
import { useState, useRef } from "react";
import PriceTime from "../priceTime";
import { useStateMachine } from "little-state-machine";
import { useNavigate } from "react-router-dom";
import updateAction from "../../updateActions";

//img
import arcade from "../../images/icon-arcade.svg";
import advance from "../../images/icon-Advanced.svg";
import pro from "../../images/icon-pro.svg";

//data
import initiaValues from "../../service/initialValues.json";

//css
import "./SectionPlan.css";

export default function SectionPlan({ props }) {
  // const { accessoriesList, planes } = initiaValues;
  const formRef = useRef();
  const navigate = useNavigate();
  const { actions, state } = useStateMachine({ updateAction });
  const [checked, setChecked] = useState(state.data.plan_type);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    let { radio_plan, plan_type } = Object.fromEntries(formData);
    plan_type = plan_type ? "yearly" : "monthly";
    actions.updateAction({
      data: { ...state.data, radio_plan, plan_type },
      section: "accesories",
    });
    navigate("/accesories/");
  };

  const goBack = () => {
    actions.updateAction({ data: { ...state.data }, section: "info" });
    navigate("/multi-step-form-main/");
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="section_form plan">
        <header>
          <h1>Select your plan</h1>
          <p className="">
            PlYou have the option of monthly or yearly billing.
          </p>
        </header>
        <main>
          <section className="section_input_radio">
            <input
              type="radio"
              name="radio_plan"
              id="arcade"
              value="arcade"
              defaultChecked={
                state.data.radio_plan == "arcade" || !state?.radio_plan
              }
              // checked={state.radio_plan == "arcade"}
            />
            <label htmlFor="arcade" className="label_card">
              <img src={arcade} alt="Arcade" />
              <div className="label_plan">
                Arcade
                <PriceTime
                  price={checked == "yearly" ? 90 : 9}
                  time={checked == "yearly" ? "yr" : "mo"}
                />
                {checked == "yearly" && <p className="free">2 mouths free</p>}
              </div>
            </label>
            <input
              type="radio"
              name="radio_plan"
              id="advance"
              value="advance"
              defaultChecked={state.data.radio_plan == "advance"}
            />
            <label htmlFor="advance" className="label_card">
              <img src={advance} alt="" />
              <div className="label_plan">
                Advance
                <PriceTime
                  price={checked == "yearly" ? 120 : 12}
                  time={checked == "yearly" ? "yr" : "mo"}
                />
                {checked == "yearly" && <p className="free">2 mouths free</p>}
              </div>
            </label>
            <input
              type="radio"
              name="radio_plan"
              id="pro"
              value="pro"
              defaultChecked={state.data.radio_plan == "pro"}
            />
            <label htmlFor="pro" className="label_card">
              <img src={pro} alt="" />
              <div className="label_plan">
                Pro
                <PriceTime
                  price={checked == "yearly" ? 150 : 15}
                  time={checked == "yearly" ? "yr" : "mo"}
                />
                {checked == "yearly" && <p className="free">2 mouths free</p>}
              </div>
            </label>
          </section>
          <section className="switch">
            <h2 className="font">Monthly</h2>
            <input
              onClick={() =>
                setChecked(checked == "yearly" ? "monthly" : "yearly")
              }
              className="switch-input"
              id="switch"
              type="checkbox"
              name="plan_type"
              defaultChecked={checked == "yearly"}
            />
            <label htmlFor="switch" className="switch-label"></label>
            <h2 className="font">Yearly</h2>
          </section>
        </main>
        <footer className="footer_info">
          <button type="button" className="btn_goBack" onClick={goBack}>
            Go Back
          </button>
          <button type="submit" className="btn_next">
            Next Step
          </button>
        </footer>
      </div>
    </form>
  );
}
