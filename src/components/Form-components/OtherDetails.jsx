import React, { useState } from "react";
import {
  RequiredLabel,
  FormHeading,
  OtherDetailsForm,
} from "../styles/Form.styled";
import { Field } from "formik";
import { TagsInput } from "react-tag-input-component";
export const OtherDetails = () => {
  const [selected, setSelected] = useState(["Indian"]);
  return (
    <>
      <FormHeading>Other Details</FormHeading>
      <OtherDetailsForm>
        <div>
          <RequiredLabel htmlFor="Occupation">Occupation </RequiredLabel>
          <Field
            name="Occupation"
            type="text"
            placeholder="Enter Occupation"
            className={`input`}
          />
        </div>
        <div>
          <RequiredLabel htmlFor="Religion">Religion</RequiredLabel>
          <Field as="select" name="Religion" className={`input select`}>
            <option value="" disabled>
              Enter Religion
            </option>
            <option value="Hinduism">Hinduism</option>
            <option value="Islam">Islam</option>
            <option value="Christianity">Christianity</option>
            <option value="Sikh">Sikh</option>
            <option value="Jain">Jain</option>
            <option value="Budhism">Budhism</option>
            <option value="Others">Others</option>
          </Field>
        </div>
        <div>
          <RequiredLabel htmlFor="MaritalStatus">Marital status</RequiredLabel>
          <Field as="select" name="MaritalStatus" className={`input select`}>
            <option value="" disabled>
              Enter Marital Status
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
          </Field>
        </div>
        <div>
          <RequiredLabel htmlFor="BloodGroup">Blood Group</RequiredLabel>
          <Field as="select" name="BloodGroup" className={`input select`}>
            <option value="" disabled>
              Enter Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Field>
        </div>
        <div>
          <RequiredLabel htmlFor="Nationality">Nationality</RequiredLabel>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="Nationality"
            placeHolder="enter Country"
          />
        </div>
      </OtherDetailsForm>
    </>
  );
};

export default OtherDetails;
