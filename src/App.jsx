// import "./App.css";
import { Container } from "./components/styles/Container.styled";
import GlobalStyle from "./components/styles/GloblalStyle.styled";
// import { SignupForm } from "./components/Form";

import { SignupForm } from "./components/Registration_Form";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <SignupForm />
      </Container>
    </React.Fragment>
  );
}

export default App;
