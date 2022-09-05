import styled from "styled-components";

export const Table = styled.table`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,400&family=Poppins:wght@300&display=swap');
border:1px solid #333;
width:100%;
border-radius:4px;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width:400px){
font-size:12px;
width:100vw;

}
`;
export const TableHead = styled.thead`

background:blue;
color:#fff;
`
export const TableBody = styled.tbody`
text-align:center;
background:linear-gradient(#f5f7fa,#b8c6db);
color:#333;


`