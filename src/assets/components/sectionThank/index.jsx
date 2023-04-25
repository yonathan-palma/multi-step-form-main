//hook
import { useNavigate } from "react-router-dom";
import updateAction from "../../updateActions";
import { useStateMachine } from "little-state-machine";

import iconThanks from "../../images/icon-thank-you.svg";
import "./Thank.css";

export function SectionThank({ props }) {
  const { actions, state } = useStateMachine({ updateAction });
  const navigate = useNavigate();
  const home = () => {
    actions.updateAction({ data: {}, section: "info" });
    navigate("/multi-step-form-main/");
  };
  return (
    <div className="section_form thanks">
      <img src={iconThanks} className="thanks_img" alt="Thank You" />
      <h1 className="thank-you-header font">Thank you!</h1>
      <p className="thank_you_description font">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@gmail.com.
      </p>
      <a className="change_link" onClick={home}>
        Home
      </a>
    </div>
  );
}
