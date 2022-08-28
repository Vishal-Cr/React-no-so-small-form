import styled from 'styled-components';

export const Form = styled.form`
display:grid;
background-color:blue ;

`
export const RequiredLabel = styled.label`
  
    ${(props) => props.Required && `&:after{
    content:'*';
    color:red;
    margin-right:0.5rem;
}) : null`

    }

`
export const FormHeading = styled.h4`
margin:0;
padding:0;
text-decoration:underline;
`