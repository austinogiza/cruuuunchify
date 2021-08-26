import React from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import { tinyText,bigText } from '../styles/TextStyles'


const Note = () => {
    return (
       <Body>

       <Icon>
       <svg  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1642 8.75253V11.808C23.9127 11.7787 23.6583 11.7794 23.4038 11.8105C21.9223 11.9912 20.7471 13.1964 20.6061 14.6805C20.4269 16.5717 21.9046 18.1972 23.7951 18.1972C25.4069 18.1972 26.7723 16.996 26.9955 15.3929L27 6.37321C27 5.68463 26.4424 5.12677 25.754 5.12659H16.524C15.8356 5.12659 15.2779 5.68447 15.2779 6.37303V15.3229C14.9731 15.2865 14.664 15.2943 14.3558 15.3469C12.9414 15.5865 11.8453 16.7667 11.7104 18.1956C11.532 20.0864 13.0095 21.7113 14.8994 21.7113C16.6686 21.7113 18.1033 20.2763 18.1042 18.5063L18.105 8.75256C18.105 8.49149 18.3161 8.28028 18.5769 8.28028H23.6924C23.9531 8.28028 24.1642 8.49149 24.1642 8.75253L7.8282 8.28869C7.1398 8.28869 6.58214 8.84657 6.58214 9.53513V18.485C6.2773 18.4486 5.96826 18.4564 5.65999 18.509C4.24561 18.7486 3.14953 19.9288 3.01461 21.3577C2.83622 23.2485 4.31368 24.8734 6.20365 24.8734C7.9728 24.8734 9.40754 23.4384 9.40843 21.6684L9.40922 11.9147C9.40922 11.6536 9.62032 11.4424 9.88109 11.4424H12.7107V8.28869H7.8282L24.1642 8.75253Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="12.36" y1="4.53418" x2="22.059" y2="28.7419" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

       </Icon>

       <Image src="https://res.cloudinary.com/austinogiza/image/upload/v1620486641/ab67706c0000bebbf4689cfc6ae366bd65f5187a_gwf7qk.jpg"/>
       <Pickheader>Pick of the week</Pickheader>
       <PickText>Quarantine Jams for ya!</PickText>
       <PlayBtn >
       <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.87109 14.553C4.89809 15.67 6.10709 16.347 7.16609 15.815L15.6821 11.239C16.1461 10.989 16.4611 10.532 16.4611 9.997C16.4611 9.461 16.1461 9.004 15.6821 8.754L7.16609 4.185C6.10609 3.653 4.89809 4.323 4.87109 5.441V14.553Z" fill="white"/>
</svg>

       </PlayBtn>

       </Body>
    )
}

const Body = styled.div`
width:40px;
height:40px;
background: ${colorThemes.green};
border-radius: 50%;
padding: 10px;
cursor: pointer;
position: absolute;
z-index: 30;
top: -20px;
left: 50%;
transform: translate(-50%,-50%);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 0.5s ease;
-webkit-transition: 0.5s ease;
overflow:hidden;
backface-visibility:hidden;

@media only screen and (max-width: 650px){
    top: 50px;
}
:hover{
    width: 300px;
height: 300px;
backface-visibility:hidden;
background: ${colorThemes.white};
transform-origin: top right;
top: 10px;
}

:focus{
    position: absolute;
    top: 10px;
    width: 300px;
height: 300px;
transform-origin: top right;
backface-visibility:hidden;
background: ${colorThemes.white};
}
`

const Icon = styled.div`
backface-visibility:hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 20px;
width: 20px;
transition: 0.5s ease;
-webkit-transition: 0.5s ease;
opacity: 1;
svg{
    height: 20px;
    transition: 0.5s ease;
-webkit-transition: 0.5s ease;
width: 20px; 
${Body}:hover & {
    opacity: 0.1;
position: absolute;
top:  50%;
left: 50%;
    transform: translate(-50%,-50%) scale(15);
}
}
path{
    backface-visibility:hidden;
    fill: ${colorThemes.dark};}
`


const Image = styled.img`
width:80px;
height:80px;
border-radius: 10px;
display: none;
transition: 0.5s ease;
${Body}:hover &{
    display: flex;  
}
`
const Pickheader = styled(tinyText)`
color:  ${colorThemes.dark};
text-align: center;
display: none;
margin: 8px 0;
transition: 0.5s ease;
${Body}:hover &{
    display: flex;  
}
`
const PickText = styled(bigText)`
color:  ${colorThemes.dark};
margin: 4px 0;
text-align: center;
display: none;
transition: 0.5s ease;
${Body}:hover &{
    display: flex;  
}
`
const PlayBtn = styled.div`
width: 30px;
height: 30px;
background: ${colorThemes.green};
border-radius: 50%;
display: none;
transition: 0.5s ease;
flex-direction: column;
justify-content: center;
align-items: center;
${Body}:hover &{
    display: flex;  
}
margin: 16px 0 0 0;
svg{
    width: 18px;
height: 18px;
}
path{

    fill:  ${colorThemes.white};
}
`

export default Note
