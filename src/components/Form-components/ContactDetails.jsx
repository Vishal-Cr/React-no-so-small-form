import React, { useState, useEffect } from "react";
import { RequiredLabel, FormHeading } from "../styles/Form.styled";
import { STATES, CITIES } from "../Data";
import { Field } from "formik";
import csc from "country-state-city";
import {
  validateName,
  validateEmail,
  validateAge,
  validateSex,
} from "../Validation/Validation";
import "../styles/SignupForm.css";

export const ContactDetails = (props) => {
  const { errors, touched } = props;
  const [inputState, setInputState] = useState("");
  const [inputCity, setInputCity] = useState(1);
  let city_arr = CITIES[inputCity].split("|");

  useEffect(() => {
    setInputCity((prevCity) => (prevCity = STATES.indexOf(inputState)));
  }, [inputState]);

  return (
    <>
      <FormHeading>Contact Details</FormHeading>
      <RequiredLabel htmlFor="Guardian_detail">Guardian Details</RequiredLabel>
      <Field
        as="select"
        name="Guardian_detail"
        className={`input  ${
          errors.Guardian_detail && touched.Guardian_detail
            ? "invalid"
            : "valid"
        }`}
      >
        <option value="" disabled>
          Enter Label
        </option>
        <option value="Father">Father</option>
        <option value="Mother">Mother</option>
        <option value="Other">Other</option>
      </Field>
      <Field
        name="Guardian_name"
        type="text"
        placeholder="Enter Guardian Name"
        className="input"
      />
      <RequiredLabel htmlFor="Email">Email</RequiredLabel>
      <Field
        name="Email"
        type="email"
        placeholder="Enter Email"
        validate={validateEmail}
        className={`'input' ${
          errors.Email && touched.Email ? "invalid" : "valid"
        }`}
      />
      {errors.Email && touched.Email && <div>{errors.Email}</div>}

      <RequiredLabel htmlFor="EmergencyNo">
        Emergency Contact Number
      </RequiredLabel>
      <Field
        name="EmergencyNo"
        type="tel"
        placeholder="Enter Emergency no"
        pattern="[7-9]{1}[0-9]{9}"
      />
      <RequiredLabel htmlFor="State">State</RequiredLabel>
      <Field
        as="select"
        name="State"
        className={`input`}
        onChange={(e) => setInputState(e.target.value)}
      >
        {STATES.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </Field>
      <RequiredLabel htmlFor="City">City</RequiredLabel>
      <Field as="select" name="City" className={`input`}>
        {city_arr.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </Field>
    </>
  );
};

export default ContactDetails;
