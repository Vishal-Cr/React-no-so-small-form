import React, { useState, useContext } from "react";
import { Form, Field, Formik } from "formik";
import { Button } from "./styles/Form.styled";
import { PersonalDetails } from "./Form-components/PersonalDetails";
import { ContactDetails } from "./Form-components/ContactDetails";
import { AddressDetails } from "./Form-components/AddressDetails";
import { OtherDetails } from "./Form-components/OtherDetails";
import { FormContext } from "./Store/FormContext";

// export default Registration_Form
export const SignupForm = () => {
  const { formData, setFormData } = useContext(FormContext);
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          Name: "",
          Age: "",
          Sex: "",
          Mobile: "",
          GovtID: "",
          ID: "",
          Guardian_detail: "",
          Guardian_name: "",
          Email: "",
          EmergencyNo: "",
          Address: "",
          State: "",
          City: "",
          Country: "India",
          Pin: "",
          Occupation: "",
          Religion: "",
          MaritalStatus: "",
          BloodGroup: "",
          Nationality: "Indian",
        }}
        onSubmit={(values, { resetForm }) => {
          setFormData((prevalues) => [...prevalues, values]);
          resetForm({ values: "" });
        }}
      >
        {({ errors, touched, values }) => (
          /* Formik Form component cannot be replaced with styled component*/
          <Form style={{ position: "relative", height: "auto" }}>
            <PersonalDetails
              errors={errors}
              touched={touched}
              values={Field.values}
            />
            <ContactDetails
              errors={errors}
              touched={touched}
              values={Field.values}
            />
            <AddressDetails
              errors={errors}
              touched={touched}
              values={Field.values}
              currentValues={values}
            />

            <OtherDetails
              errors={errors}
              touched={touched}
              currentValues={Field.values}
            />
            <div>
              <Button type="reset" reset>
                CANCEL
                <span style={{ display: "block", fontSize: "10px" }}>
                  {" "}
                  (ESC)
                </span>
              </Button>
              <Button type="submit" submit>
                SUBMIT
                <span style={{ display: "block", fontSize: "10px" }}>
                  (&#8984;S)
                </span>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
