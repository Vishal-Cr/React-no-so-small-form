import styled from 'styled-components';


export const RequiredLabel = styled.label`
     font-size:calc(12px + 0.2vw);
     text-wrap:wrap;
     margin-right:1rem;
     font-weight:500;
    ${(props) => props.Required && `&:after{
    content:'*';
    color:red;
    margin-right:0.5rem;

}) `

    }

`
export const FormHeading = styled.span`
margin:20px 0;
padding:0;
text-decoration:underline;
font-weight:bold;
`

export const ErrorText = styled.div`
color:red;
font-size:12px;
margin:5px 0;
`
export const PersonalDetailsForm = styled.div`
  display: grid;
  padding:1rem;
  grid-template-columns:1fr 1.5fr 0.5fr ;
  grid-template-rows:1fr 1fr;
  gap: 1.5rem;
  justify-items:stretch;
  align-items:stretch;
  
  & .input{
    width:60%;
    padding:8px;
    border:2px solid #d3d3d3;
    border-radius:4px;
    
  }
 & .input.invalid{
    border:2px solid red;
   
    outline:none;
}

& .input.select{
  background:transparent;
}
& .input:active{
    outline:none;
}

  & .Input_pair{
    display:flex;
    flex:flow;
    width:auto;
    gap:0.5em;
  }
  
 @media only screen and (max-width:1000px){
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
 }

`
export const ContactDetailsForm = styled(PersonalDetailsForm)`

display:flex;
flex-wrap:wrap;

& .input{
  width:auto;
}

`


export const AddressDetailsForm = styled(PersonalDetailsForm)`
  
  
  &>div{
    width:100%;
    padding:0.5rem;
    
  }
 
  `
export const OtherDetailsForm = styled(PersonalDetailsForm)`

 `;

export const Button = styled.button`
position:absolute;
right:9rem;
max-widht:2rem;
padding:0.8rem 2rem;
display:inline-block;
margin:2rem;
border:1px solid green;
background:green;
border-radius:4px;
color:#fff;
cursor:pointer;
@media only screen and (max-width:460px){
 right:0;
  
 padding:1.2rem;
 font-size:12px;
}
${(props) => props.reset && `{
    right:18rem;
    border:1px solid red;
    border-radius:4px;
    background:transparent;
    color:red;
}
@media only screen and (max-width:460px){
right:40%;
}
`}
`;