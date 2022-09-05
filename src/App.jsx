import React, { useState } from "react";
import { Container } from "./components/styles/Container.styled";
import GlobalStyle from "./components/styles/GloblalStyle.styled";
import ReactTable from "./components/ReactTable";
import { SignupForm } from "./components/Registration_Form";
import { FormContext } from "./components/Store/FormContext";
function App() {
  const [formData, setFormData] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  return (
    <React.Fragment>
      <GlobalStyle />
      <FormContext.Provider
        value={{ formData, setFormData, selectedState, setSelectedState }}
      >
        <Container>
          <SignupForm />
          <ReactTable data={formData} current_selected_state={selectedState}/>
        </Container>
      </FormContext.Provider>
    </React.Fragment>
  );
}

export default App;
