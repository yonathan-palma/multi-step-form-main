//hook
import { useNavigate, Link } from "react-router-dom";
import updateAction from "../../updateActions";
import { useStateMachine } from "little-state-machine";

import PriceTime from "../priceTime";
import initiaValues from "../../service/initialValues.json";

//css
import "./Finishing.css";

export default function SEctionFinishing({ props }) {
  const { actions, state } = useStateMachine({ updateAction });
  const { radio_plan, plan_type, accessories, cost_plan } = state.data;
  const { planes } = initiaValues;
  const navigate = useNavigate();
  const totalAccessories = accessories.reduce((acu, elem) => {
    return acu + elem.price[plan_type];
  }, 0);

  const plan = planes[radio_plan];

  const handleSubmit = () => {
    let total = totalAccessories + plan[plan_type];

    actions.updateAction({ data: { ...state.data, total } });
    navigate("/thanks/");
  };
  const goBack = (section) => {
    actions.updateAction({ data: { ...state.data }, section: section });
    navigate(`/${section}/`);
  };

  return (
    <div className="section_form finishing">
      <header>
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </header>
      <main>
        <div className="order_container">
          <div className="order order_border_button">
            <div className="radio_plan">
              <p className="radio_plan_title">
                {`${radio_plan[0].toUpperCase() + radio_plan.substring(1)} `}(
                {`${plan_type[0].toUpperCase() + plan_type.substring(1)}`})
              </p>
              <a className="change_link" onClick={() => goBack("planes")}>
                Change
              </a>
              {/* <Link to="/planes/">Change</Link> */}
            </div>
            <p className="price_order radio_plan_title">
              <PriceTime
                price={plan[plan_type]}
                time={plan_type == "monthly" ? "mo" : "yr"}
              />
            </p>
          </div>
          {accessories.map((elem) => {
            return (
              <div className="acceesories_container" key={elem.name}>
                <div className="order" key={elem.name}>
                  <div className="accesorieTitle">
                    <p>{elem.name}</p>
                  </div>
                  <div className="accesoriePrice">
                    +
                    <PriceTime
                      price={elem.price[plan_type]}
                      time={plan_type == "monthly" ? "mo" : "yr"}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <p>Total (per {plan_type == "monthly" ? "month" : "year"}) </p>
          <p className="total_cost">
            {plan_type == "monthly" ? "+" : ""}
            <PriceTime
              price={totalAccessories + plan[plan_type]}
              time={plan_type == "monthly" ? "mo" : "yr"}
            />
          </p>
        </div>
      </main>
      <footer className="footer_info">
        <button
          type="button"
          className="btn_goBack"
          onClick={() => goBack("accesories")}
        >
          Go Back
        </button>
        <button type="button" onClick={handleSubmit} className="btn_next">
          Confirm
        </button>
      </footer>
    </div>
  );
}
