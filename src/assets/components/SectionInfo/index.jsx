//kook
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { redirect, useNavigate } from "react-router-dom";

//
import updateAction from "../../updateActions";

//css
import "./SectionInfo.css";

export default function SectionInfo({ props }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  const phoneRegexp = new RegExp(/^\d{7,}$/);
  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    e.preventDefault();
    actions.updateAction({
      data: { ...state.data, ...data },
      section: "planes",
    });
    // props.history.push("./step2");
    navigate("/planes/");
    // redirect("/planes");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="section_form info">
        <header>
          <h1>Personal info</h1>
          <p className="">
            Please provide your name, email address, and phone number.
          </p>
        </header>
        <main>
          <label htmlFor="name">
            Name
            {errors.name?.type === "required" && (
              <span className="error">{errors.name?.message}</span>
            )}
          </label>
          <input
            type="text"
            className={errors?.name && "input_error"}
            {...register("name", { required: "First name is required" })}
            // aria-invalid={errors.name ? "true" : "false"}
            defaultValue={state.data.name}
            id="name"
            placeholder="e.g. Stephen King"
          />
          <label htmlFor="">
            Email-Address
            {errors.email && (
              <span className="error">{errors.email?.message}</span>
            )}
          </label>
          <input
            type="text"
            className={errors?.email && "input_error"}
            {...register("email", {
              required: "This field is required",
              pattern: { value: emailRegexp, message: "this is not email" },
            })}
            defaultValue={state.data.email}
            placeholder="e.g. stephenking@lorem.com"
          />
          <label htmlFor="">
            Phone Number
            {errors.phone && (
              <span className="error">{errors.phone?.message}</span>
            )}
          </label>
          <input
            type="text"
            className={errors?.phone && "input_error"}
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: phoneRegexp,
                message: "this is not number phone val",
              },
            })}
            value={state.data.phone}
            placeholder="e.g. 1234567890"
          />
        </main>
        <footer className="footer_info">
          <button type="submit" className="btn_next">
            Next Step
          </button>
        </footer>
      </div>
    </form>
  );
}

// export default withRouter(SectionInfo);
