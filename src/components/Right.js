import React from 'react'
import {ImSpotify} from 'react-icons/im'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import { mediumText,headerText } from '../styles/TextStyles'


const Right = () => {
    return (
       <Body>
       <BodyGrid>
       <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>

        <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>

       <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>

       <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>

        <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>

       <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>

       <Dot>
           <span></span>
       </Dot>
       <Dot>
           <span></span>
       </Dot>


       </BodyGrid>
       
<BodyText>

    <Header>Discover how you <span>listen.</span> </Header>
    <Text>Explore your music taste profile and create awesome playlists.</Text>
    <Button><Spotify /> Continue With Spotify</Button>
</BodyText>

       </Body>

    )
}

const Body = styled.div`
width: 100%;
height: 100%;
position: relative;
`

const BodyGrid = styled.div`
position: absolute;
top: 30px;
left: -80px;
z-index: 20;
display: grid;
grid-template-columns: repeat(4,1fr);
width: 100%;
max-width: 200px;
height: 240px;

`
const Dot = styled.div`
width: 15px;
height: 15px;
display: flex;

justify-content: center;
align-items:center;
span{
    border-radius: 50%;
    width: 4px;
height: 4px;
background: ${colorThemes.green};
}
`       
const BodyText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
max-width: 400px;
height: 100%;
position: relative;
z-index: 25;
margin: 56px 0 0 0;
@media only screen and (max-width: 650px){
    align-items: center;
    max-width: 300px;
    margin:56px auto 0 auto;
}


`
const Header = styled(headerText)`
margin: 0;
span{
    color: ${colorThemes.green};
}
@media only screen and (max-width: 650px){
    text-align: center;
}
`
const Text = styled(mediumText)`
margin: 16px 0;
@media only screen and (max-width: 650px){
    text-align: center;
}
`


const Button = styled.button`
width: 220px;
height: 64px;
border-radius: 10px;
background: ${colorThemes.green};
outline: none;
border: none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: ${colorThemes.white};
cursor: pointer;
font-size: 13px;
font-family: "MaisonNeueMedium";
font-style: normal;
font-weight: 400;
text-align: left;
margin: 16px 0;

@media only screen and (max-width: 650px){
    font-size: 12px;
    text-align: center;
}
`
const Spotify = styled(ImSpotify)`
width: 18px;
height: 18px;
margin: 0 8px 0 0;
color: ${colorThemes.white};

`

export default Right
