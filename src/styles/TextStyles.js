import styled from "styled-components";

export const tinyText = styled.h2`
font-size: 12px;
font-family: "Maison Neue Bold";
font-style: normal;
font-weight: 600;
text-align: left;
`
export const headerText = styled.h1`
  font-family: "Maison Neue Bold";
font-size: 61px;
font-weight: 900;
line-height: 1.27;

@media only screen and (max-width: 800px){
    font-size: 40px; 
}
@media only screen and (max-width: 650px){
    font-size: 34px; 
}



`

export const mediumText = styled.h1`
font-family: "Maison Neue Regular";
font-size: 16px;
font-weight: 400;
line-height: 1.6;
@media only screen and (max-width: 450px){
    font-size: 15px; 
}

@media only screen and (max-width: 300px){
    font-size: 14px; 
}
`
export const bigText = styled.h1`
  font-family: "Maison Neue Bold";
font-size: 18px;
font-weight: 700;
line-height: 1.6;
@media only screen and (max-width: 450px){
    font-size: 17px; 
}

@media only screen and (max-width: 300px){
    font-size: 15px; 
}
`

