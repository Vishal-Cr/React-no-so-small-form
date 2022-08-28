import React from "react";
import { RequiredLabel, FormHeading } from "../styles/Form.styled";
import { Field } from "formik";
import {
  validateName,
  validateAge,
  validateSex,
} from "../Validation/Validation";
import "../styles/SignupForm.css";

const AddressDetails = () => {
  return (
    <>
    <FormHeading>Address Details</FormHeading>
    <RequiredLabel htmlFor="Address" Required>
        Address{" "}
      </RequiredLabel>
      <Field
        name="Address"
        type="text"
        placeholder="Enter Address"
        className={`input`}
        />
            <RequiredLabel htmlFor="State" Required>
        State{" "}
      </RequiredLabel>
     
    </>
  )
}

export default AddressDetails