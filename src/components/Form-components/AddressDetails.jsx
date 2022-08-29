import React, { useState, useEffect } from "react";
import {
  RequiredLabel,
  FormHeading,
  AddressDetailsForm,
} from "../styles/Form.styled";
import { Field } from "formik";
import { STATES, CITIES } from "../Data";
import { validatePin } from "../Validation/Validation";
import "../styles/SignupForm.css";

export const AddressDetails = (props) => {
  const { errors, touched } = props;
  const [inputState, setInputState] = useState("Enter State");
  const [inputCity, setInputCity] = useState(1);
  let city_arr = CITIES[inputCity].split("|");

  useEffect(() => {
    setInputCity((prevCity) => (prevCity = STATES.indexOf(inputState)));
  }, [inputState]);

  return (
    <>
      <FormHeading>Address Details</FormHeading>
      <AddressDetailsForm>
        <div>
          <RequiredLabel htmlFor="Address">Address</RequiredLabel>
          <Field
            name="Address"
            type="text"
            placeholder="Enter Address"
            className="input"
          />
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <RequiredLabel htmlFor="Country">Country</RequiredLabel>
          <Field type="search" name="Country" className="input" />
        </div>
        <div>
          <RequiredLabel htmlFor="Pin">Pincode</RequiredLabel>
          <Field
            type="number"
            name="Pin"
            className={`input ${
              errors.Pin && touched.Pin ? "invalid" : "valid"
            }`}
            validate={validatePin}
            minLength="6"
            maxLength="6"
            placeholder="Enter Pincode"
          />
          {errors.Pin && touched.Pin && <ErrorText>{errors.Pin}</ErrorText>}
        </div>
      </AddressDetailsForm>
    </>
  );
};

export default AddressDetails;
