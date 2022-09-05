import React, { useState, useEffect, useContext } from "react";
import {
  RequiredLabel,
  FormHeading,
  AddressDetailsForm,
  ErrorText,
} from "../styles/Form.styled";

import { FormContext } from "../Store/FormContext";
import { Field, setNestedObjectValues } from "formik";
import { STATES, CITIES } from "../Data";
import { validatePin } from "../Validation/Validation";
import "../styles/SignupForm.css";
import { TagsInput } from "react-tag-input-component";

export const AddressDetails = (props) => {
  const { selectedState, setSelectedState } = useContext(FormContext);
  const { errors, touched } = props;
  const [inputState, setInputState] = useState("Enter State");
  const [inputCityIndex, setinputCityIndex] = useState(0);
  const [selected, setSelected] = useState(["India"]);

  let city_arr = CITIES[inputCityIndex].split("|");

  useEffect(() => {
    setinputCityIndex((prevCity) => (prevCity = STATES.indexOf(inputState)));
    setSelectedState(inputState);
  }, [inputState, city_arr]);

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
          <RequiredLabel htmlFor="State" Required>
            State
          </RequiredLabel>
          <Field
            as="select"
            name="State"
            id="State"
            className={`input select`}
            onChange={(event) => {
              setInputState(event.target.value);
            }}
            value={inputState}
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
          <Field as="select" name="City" className={`input select`}>
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
          <RequiredLabel htmlFor={`Country`}>Country</RequiredLabel>

          <TagsInput
            value={selected}
            onChange={setSelected}
            name="Country"
            placeHolder="enter Country"
          />
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
