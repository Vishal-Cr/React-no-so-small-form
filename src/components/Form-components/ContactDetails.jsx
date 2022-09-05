import { RequiredLabel, FormHeading, ErrorText } from "../styles/Form.styled";

import { Field } from "formik";
import { validateEmail } from "../Validation/Validation";
import "../styles/SignupForm.css";
import { ContactDetailsForm } from "../styles/Form.styled";

export const ContactDetails = (props) => {
  const { errors, touched } = props;

  return (
    <>
      <FormHeading>Contact Details</FormHeading>
      <ContactDetailsForm>
        <div className="Input_pair">
          <RequiredLabel htmlFor="Guardian_detail">
            Guardian Details
          </RequiredLabel>
          <Field as="select" name="Guardian_detail" className={`input select`}>
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
        </div>
        <div>
          <RequiredLabel htmlFor="Email">Email</RequiredLabel>
          <Field
            name="Email"
            type="email"
            placeholder="Enter Email"
            validate={validateEmail}
            className={`input ${
              errors.Email && touched.Email ? "invalid" : "valid"
            }`}
          />
          {errors.Email && touched.Email && (
            <ErrorText>{errors.Email}</ErrorText>
          )}
        </div>
        <div>
          <RequiredLabel htmlFor="EmergencyNo">
            Emergency Contact Number
          </RequiredLabel>
          <Field
            name="EmergencyNo"
            type="tel"
            className={`input`}
            placeholder="Enter Emergency no"
            pattern="[7-9]{1}[0-9]{9}"
          />
        </div>
      </ContactDetailsForm>
    </>
  );
};

export default ContactDetails;
