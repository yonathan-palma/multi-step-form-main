//hook
import { useStateMachine } from "little-state-machine";
import { useNavigate } from "react-router-dom";
import updateAction from "../../updateActions";
import { useForm } from "react-hook-form";

//component
import PriceTime from "../priceTime";

//data
import initiaValues from "../../service/initialValues.json";
import "./accessories.css";

export default function SectionAccessories({ props }) {
  const { accessoriesList } = initiaValues;
  const { actions, state } = useStateMachine({ updateAction });
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  let { plan_type, accessories = [] } = state.data;

  const handleChange = (e, price) => {
    const { id, checked, dataset } = e.target;

    if (!checked) {
      accessories = accessories.filter((ele) => ele.name != dataset.title);
      // accessories.splice(accessories.findIndex(id) ,1)
    } else {
      accessories.push({ name: dataset.title, price });
    }
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    actions.updateAction({
      data: { ...state.data, accessories: accessories },
      section: "finish",
    });
    navigate("/finish/");
  };

  const goBack = () => {
    actions.updateAction({ data: { ...state.data }, section: "plan" });
    navigate("/planes/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="section_form accessories">
        <header>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </header>
        <main>
          {accessoriesList.map((element) => {
            let checked = accessories.some(
              (elem) => elem.name == element.title
            );
            return (
              <label
                htmlFor={element.id}
                className="label_accessories"
                key={element.id}
              >
                <input
                  type="checkbox"
                  {...register(element.id)}
                  id={element.id}
                  data-title={element.title}
                  defaultChecked={checked}
                  onChange={(e) => handleChange(e, element.price)}
                />
                <div className="title_label">
                  <h2 className="add-ons-package-h2">{element.title}</h2>
                  <h3 className="add-ons-package-h4">{element.description}</h3>
                </div>
                <p className="price_accesories">
                  +
                  <PriceTime
                    price={element.price[plan_type]}
                    time={plan_type == "monthly" ? "mo" : "yr"}
                  />
                </p>
              </label>
            );
          })}
        </main>
        <footer className="footer_info">
          <button type="butoon" className="btn_goBack" onClick={goBack}>
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
