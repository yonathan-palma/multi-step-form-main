// hook
import { useState } from "react";
import PriceTime from "../priceTime";

//img
import arcade from "../../images/icon-arcade.svg";
import advance from "../../images/icon-Advanced.svg";
import pro from "../../images/icon-pro.svg";

//data
import initiaValues from "../../service/initialValues.json";

//css
import "./SectionPlan.css";

export default function SectionPlan({ setValues, values, setSection }) {
  const { accessoriesList, planes } = initiaValues;

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const price = e.target.dataset.price;

    const newValues = {
      ...values,
      [name]: value,
      cost_plan: planes[value][values.plan_type],
    };
    setValues(newValues);
  };

  const handlePlan = () => {
    const plan_type = values.plan_type == "monthly" ? "yearly" : "monthly";
    const { radio_plan } = values;
    let newAccessories = [];

    if (values.accessories.length) {
      newAccessories = values.accessories.map((acce) => {
        let accessorie = accessoriesList.find(
          (elem) => elem.title == acce.name
        );
        acce.price = accessorie.price[plan_type];
        return acce;
      });
    }

    const newValues = {
      ...values,
      plan_type: plan_type,
      cost_plan: planes[radio_plan][plan_type],
      accessories: newAccessories,
    };
    setValues(newValues);
  };

  return (
    <div className="section_form plan">
      <header>
        <h1>Select your plan</h1>
        <p className="">PlYou have the option of monthly or yearly billing.</p>
      </header>
      <main>
        <section className="section_input_radio">
          <input
            onChange={handleChange}
            type="radio"
            name="radio_plan"
            id="arcade"
            value="arcade"
            checked={values.radio_plan == "arcade"}
          />
          <label htmlFor="arcade" className="label_card">
            <img src={arcade} alt="Arcade" />
            <div className="label_plan">
              Arcade
              <PriceTime
                price={checked ? 90 : 9}
                time={checked ? "mo" : "yr"}
              />
              {values.plan_type == "yearly" && (
                <p className="free">2 mouths free</p>
              )}
            </div>
          </label>
          <input
            onChange={handleChange}
            type="radio"
            name="radio_plan"
            id="advance"
            value="advance"
            checked={values.radio_plan == "advance"}
          />
          <label htmlFor="advance" className="label_card">
            <img src={advance} alt="" />
            <div className="label_plan">
              Advance
              <PriceTime
                price={checked ? 120 : 12}
                time={checked ? "mo" : "yr"}
              />
              {values.plan_type == "yearly" && (
                <p className="free">2 mouths free</p>
              )}
            </div>
          </label>
          <input
            onChange={handleChange}
            type="radio"
            name="radio_plan"
            id="pro"
            value="pro"
            checked={values.radio_plan == "pro"}
          />
          <label htmlFor="pro" className="label_card">
            <img src={pro} alt="" />
            <div className="label_plan">
              Pro
              <PriceTime
                price={checked ? 150 : 15}
                time={checked ? "mo" : "yr"}
              />
              {values.plan_type == "yearly" && (
                <p className="free">2 mouths free</p>
              )}
            </div>
          </label>
        </section>
        <section className="switch">
          <h2 className="font">Monthly</h2>
          <input
            onClick={() => setChecked((checked) => !checked)}
            className="switch-input"
            id="switch"
            type="checkbox"
            name="plan_type"
            onChange={handlePlan}
            checked={values.plan_type == "yearly"}
          />
          <label htmlFor="switch" className="switch-label"></label>
          <h2 className="font">Yearly</h2>
        </section>
      </main>
      <footer className="footer_info">
        <button
          type="button"
          className="btn_goBack"
          onClick={() => setSection("info")}
        >
          Go Back
        </button>
        <button
          type="button"
          className="btn_next"
          onClick={() => setSection("accessories")}
        >
          Next Step
        </button>
      </footer>
    </div>
  );
}
