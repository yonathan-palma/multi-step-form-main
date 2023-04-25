import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateActions";
import "./FormAside.css";

export default function FormAside() {
  const { actions, state } = useStateMachine({ updateAction });
  let { section } = state;
  return (
    <div className="form_aside">
      <ul className="aside_list">
        <li className="aside_item">
          <div className={`item_num ${section == "info" && "active"}`}>1</div>
          <div className="item_title">
            <p>STEP1</p>
            <h2>YOUR INFO</h2>
          </div>
        </li>
        <li className="aside_item">
          <div className={`item_num ${section == "planes" && "active"}`}>2</div>
          <div className="item_title">
            <p>STEP2</p>
            <h2>SELECT PLAN</h2>
          </div>
        </li>
        <li className="aside_item">
          <div className={`item_num ${section == "accesories" && "active"}`}>
            3
          </div>
          <div className="item_title">
            <p>STEP3</p>
            <h2>ADD- ONS</h2>
          </div>
        </li>
        <li className="aside_item">
          <div className={`item_num ${section == "finish" && "active"}`}>4</div>
          <div className="item_title">
            <p>STEP4</p>
            <h2>SUMMARY</h2>
          </div>
        </li>
      </ul>
    </div>
  );
}
