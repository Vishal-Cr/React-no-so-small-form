import React from "react";
import { RequiredLabel, FormHeading } from "../styles/Form.styled";
import { Field } from "formik";
export const OtherDetails = () => {
  return (
    <>
      <FormHeading>Other Details</FormHeading>
      <RequiredLabel htmlFor="Occupation">Occupation </RequiredLabel>
      <Field
        name="Occupation"
        type="text"
        placeholder="Enter Occupation"
        className={`input`}
      />
      <RequiredLabel htmlFor="Religion">Religion</RequiredLabel>
      <Field as="select" name="Religion" className={`input`}>
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
      <RequiredLabel htmlFor="MaritalStatus">Marital status</RequiredLabel>
      <Field as="select" name="MaritalStatus" className={`input`}>
        <option value="" disabled>
          Enter Marital Status
        </option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Widowed">Widowed</option>
        <option value="Separated">Separated</option>
        <option value="Divorced">Divorced</option>
      </Field>
      <RequiredLabel htmlFor="BloodGroup">Blood Group</RequiredLabel>
      <Field as="select" name="Blood Group" className={`input`}>
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

      <RequiredLabel htmlFor="Nationality">Nationality</RequiredLabel>
      <Field type="search" name="Nationality" className="input" />
    </>
  );
};

export default OtherDetails;
