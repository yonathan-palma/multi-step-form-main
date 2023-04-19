import { useState } from "react";
import "./SectionInfo.css";

export default function SectionInfo({ setValues, values, setSection }) {
  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = {
      ...values,
      [name]: value,
    };
    console.log(newValues);
    setValues(newValues);
  };
  const validateInputs = (e) => {
    e.preventDefault();
    let error = {};
    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    const phoneRegexp = new RegExp(/^\d{7,}$/);

    if (values.name === "") {
      error.name = "This field is required";
    }
    if (values.email !== "") {
      values.email.match(emailRegexp)
        ? ""
        : (error.email = "this is not email");
    } else {
      error.email = "This field is required";
    }
    if (values.phone !== "") {
      values.phone.match(phoneRegexp)
        ? ""
        : (error.phone = "this is not number phone valid");
    } else {
      error.phone = "This field is required";
    }

    if (Object.entries(error).length == 0) {
      setSection("plan");
    } else {
      setError(error);
    }
  };

  return (
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
          {errors?.name && <span className="error">{errors.name}</span>}
        </label>
        <input
          type="text"
          onChange={handleChange}
          value={values.name}
          className={errors?.name && "input_error"}
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
        />
        <label htmlFor="">
          Email-Address
          {errors?.email && <span className="error">{errors.email}</span>}
        </label>
        <input
          type="email"
          onChange={handleChange}
          value={values.email}
          className={errors?.name && "input_error"}
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label htmlFor="">
          Phone Number
          {errors?.phone && <span className="error">{errors.phone}</span>}
        </label>
        <input
          type="text"
          onChange={handleChange}
          value={values.phone}
          className={errors?.phone && "input_error"}
          name="phone"
          placeholder="e.g. 1234567890"
        />
      </main>
      <footer className="footer_info">
        <button onClick={validateInputs} type="butoon" className="btn_next">
          Next Step
        </button>
      </footer>
    </div>
  );
}
