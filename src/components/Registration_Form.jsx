import React from "react";
import { Form, Field, Formik } from "formik";
// import { Form } from "./styles/Form.styled";
import { PersonalDetails } from "./Form-components/PersonalDetails";
import { ContactDetails } from "./Form-components/ContactDetails";
import { AddressDetails } from "./Form-components/AddressDetails";
import { OtherDetails } from "./Form-components/OtherDetails";
export const SignupForm = () => (
  <div>
    <Formik
      initialValues={{
        Name: "",
        Age: "",
        Sex: "",
        Mobile: "",
        GovtID:"",
        ID: "",
        Guardian_detail: "",
        Guardian_name: "",
        Email: "",
        EmergencyNo: "",
        Address: "",
        State: "",
        Country: "India",
        Pin: "",
        Occupation: "",
        Religion: "",
        MaritalStatus: "",
        BloodGroup: "",
        Nationality: "India",
      }}
      onSubmit={(values) => {
        // same shape as initial values

        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="Form_Main">
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
          />
          <OtherDetails
            errors={errors}
            touched={touched}
            values={Field.values}
          />
          <button type="reset">Cancel</button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
