import React from "react";
import { Form, Field, Formik } from "formik";
import { PersonalDetails } from "./Form-components/PersonalDetails";
import { ContactDetails } from "./Form-components/ContactDetails";
export const SignupForm = () => (
  <div>
    <Formik
      initialValues={{
        Name: "",
        Age: "",
        Sex: "",
        Mobile: "",
        ID: "",
        Guardian_detail: "",
        Guardian_name: "",
        Email: "",
        EmergencyNo: "",
        State: "",
      }}
      onSubmit={(values) => {
        // same shape as initial values

        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
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
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
