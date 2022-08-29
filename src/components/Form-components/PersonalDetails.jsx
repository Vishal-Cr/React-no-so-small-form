import React from "react";
import {
  RequiredLabel,
  FormHeading,
  PersonalDetailsForm,
  ErrorText,
} from "../styles/Form.styled";
import { Field } from "formik";

import {
  validateName,
  validateAge,
  validateSex,
  validateMobile,
} from "../Validation/Validation";
import "../styles/SignupForm.css";
export const PersonalDetails = (props) => {
  const { errors, touched } = props;
  return (
    <>
      <FormHeading>Personal Details</FormHeading>
      <PersonalDetailsForm>
        <div>
          <RequiredLabel htmlFor="Name" Required>
            Name{" "}
          </RequiredLabel>
          <Field
            name="Name"
            type="text"
            validate={validateName}
            placeholder="Enter Name"
            className={`input ${
              errors.Name && touched.Name ? "invalid" : "valid"
            }`}
          />
          {errors.Name && touched.Name && <ErrorText>{errors.Name}</ErrorText>}
        </div>
        <div>
          <RequiredLabel htmlFor="Age" Required>
            Date of Birth or Age{" "}
          </RequiredLabel>
          <Field
            name="Age"
            type="text"
            placeholder="DD/MM/YY or Age in Years"
            className={`input ${
              errors.Age && touched.Age ? "invalid" : "valid"
            }`}
            validate={validateAge}
          />
          {errors.Age && touched.Age && <ErrorText>{errors.Age}</ErrorText>}
        </div>
        <div>
          <RequiredLabel htmlFor="Sex" Required>
            Sex{" "}
          </RequiredLabel>
          <Field
            as="select"
            name="Sex"
            validate={validateSex}
            className={`input  ${
              errors.Sex && touched.Sex ? "invalid" : "valid"
            }`}
          >
            <option value="" disabled>
              Enter Sex
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Field>
          {errors.Sex && touched.Sex && <ErrorText>{errors.Sex}</ErrorText>}
        </div>
        <div>
          <RequiredLabel htmlFor="Name">Mobile </RequiredLabel>
          <Field
            name="Mobile"
            type="tel"
            pattern="[7-9]{1}[0-9]{9}"
            validate={validateMobile}
            placeholder="Enter Mobile"
            className={`input ${
              errors.Mobile && touched.Mobile ? "invalid" : "valid"
            }`}
          />
          {errors.Mobile && touched.Mobile && (
            <ErrorText>{errors.Mobile}</ErrorText>
          )}
        </div>
        <div className="Input_pair">
          <RequiredLabel htmlFor="GovtID">Govt Issued ID </RequiredLabel>
          <Field
            as="select"
            name="GovtId"
            className={`input  ${
              errors.GovtId && touched.GovtId ? "invalid" : "valid"
            }`}
          >
            <option value="" disabled>
              ID Type
            </option>
            <option value="Aadhar">Aadhar Number</option>
            <option value="Voter">Voter ID</option>
            <option value="Passport">Passport ID</option>
            <option value="PAN">PAN ID</option>
            <option value="other">Other</option>
          </Field>

          <Field
            name="ID"
            type="text"
            placeholder="Enter Govt ID"
            className="input"
            id="ID"
          />
        </div>
      </PersonalDetailsForm>
    </>
  );
};

export default PersonalDetails;
