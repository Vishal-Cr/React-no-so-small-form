import styled from 'styled-components';


export const RequiredLabel = styled.label`
     font-size:calc(12px + 0.2vw);
     text-wrap:wrap;
     margin-right:1rem;
    ${(props) => props.Required && `&:after{
    content:'*';
    color:red;
    margin-right:0.5rem;
}) : null`

    }

`
export const FormHeading = styled.span`
margin:20px 0;
padding:0;
text-decoration:underline;
`

export const ErrorText = styled.div`
color:red;
font-size:12px;
margin:5px 0;
`
export const PersonalDetailsForm = styled.div`
  display: grid;
  padding:1rem;
  grid-template-columns:1fr 1fr 0.5fr ;
  grid-template-rows:1fr 1fr;
  gap: 1.5rem;
  justify-items:stretch;
  align-items:stretch;
  
  & .input{
    width:60%;
    padding:5px;
    max-height:40px;
    border:2px solid #d3d3d3;
    border-radius:4px;
  }
 & .input.invalid{
    border:2px solid red;
   
    outline:none;
}
& .input:active{
    outline:none;
}

  & .Input_pair{
    display:flex;
    width:auto;
    gap:0.5em;
  }
  
 

`
export const ContactDetailsForm = styled(PersonalDetailsForm)`

display:flex;
gap:1.5em;
& .input{
    width:auto;
  }

  `

export const AddressDetailsForm = styled(PersonalDetailsForm)`
  grid-template-columns:1fr 1fr 1fr;
  gap:0.5em;
  justify-items:center;
  align-items:center;
  &>div{
    width:100%;
    padding:0.5rem;
    
  }
 
  `
