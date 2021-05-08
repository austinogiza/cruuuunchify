import React from 'react'
import styled from 'styled-components'
import Left from '../components/Left'
import Right from '../components/Right'
import { tinyText } from '../styles/TextStyles'
import {FiLink2} from 'react-icons/fi'
import {IoShareSocial} from 'react-icons/io5'
import logo from '../assets/logo.svg'
import bolt from '../assets/bolt.svg'
import string from '../assets/string.svg'
import { colorThemes } from '../styles/ColorStyles'
const Home = () => {
    return (
       <Body>
       <Header>
           <Logo>
               <Logoimg src={logo} alt="Cruuuunchify logo"/>
           </Logo>
           <About>
               <Abouticon/>
               <AboutText>About</AboutText>
           </About>
           <Share>
               <ShareIcon/> <ShareText>Share</ShareText>
           </Share>
       </Header>
<Grids>

</Grids>
<BodyGrid>
    
<Right/>
           <Left/>
</BodyGrid>
<Bottom>
    <BottomIcons>
        <Music>
            <Musicimg src={string}/>
        </Music>
        <Bolt>
            <BoltIcon src={bolt}/>
        </Bolt>
    </BottomIcons>
    <Bottomtext>
        <Bottomheader>Don't have a Spotify Account?</Bottomheader>
        <Bottomtextp>Explorer coming soon</Bottomtextp>
    </Bottomtext>
</Bottom>
       </Body>
    )

}


const Body = styled.div`
width:100%;
min-height:100vh;
display: flex;
flex-direction: column;
padding: 10px 32px;
`

const BodyGrid = styled.div`
width:100%;
min-height:500px;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-auto-rows: minmax(300px,auto);
position: relative;
max-width: 1000px;
margin: 0 auto;
@media only screen and (max-width: 700px){
    grid-template-columns: repeat(1,1fr);
}
`


const Grids = styled.div`
position: relative;
`

const Header = styled.div`
height: 50px;
display: flex;
flex-direction: row;
width: 100%;
justify-content: flex-start;
align-items: center;
max-width: 1300px;
margin: 0;
@media only screen and (max-width: 450px){
    justify-content:space-between;
}
`
const Logo = styled.div`
width: 30px;
height: 30px;
cursor: pointer;
margin: 0 8px;
`
const Logoimg = styled.img`
width: 30px;
height: 30px;
`
const About = styled.div`
display: flex;
flex-direction: row;
width: 80px;
cursor: pointer;
height: 40px;
justify-content: center;
align-items: center;
margin: 0 8px;
`
const Abouticon = styled(FiLink2)`
color: ${colorThemes.white};
width: 20px;
height: 20px;
`
const AboutText = styled(tinyText)`
margin: 0 8px;
color: ${colorThemes.white};

`
const Share = styled.div`
display: flex;
flex-direction: row;
width: 80px;
height: 30px;
justify-content: flex-start;
align-items: center;
margin: 0 8px;
cursor: pointer;
`
const ShareIcon = styled(IoShareSocial)`
color: ${colorThemes.white};
width: 20px;
height: 20px;
`
const ShareText = styled(tinyText)`
color: ${colorThemes.white};
margin: 0 8px;
`

const Bottom = styled.div`
height: 50px;
width: 100%;
display: flex;
flex-direction: row;

justify-content: flex-start;
align-items: center;
max-width: 1300px;
margin: 0;
`
const BottomIcons = styled.div`
height: 50px;
width: 60px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`
const Music = styled.div`
height: 28px;
width: 28px;
border-radius: 50%;
border: 3px solid ${colorThemes.dark};
background: ${colorThemes.purple};
position: relative;
z-index: 21;
display: flex;
justify-content:  center;
align-items: center;
`
const Musicimg = styled.img`
height: 12px;
width: 12px;
`
const Bolt = styled.div`
height: 28px;
width: 28px;
border-radius: 50%;
border: 3px solid ${colorThemes.dark};
background: ${colorThemes.green};
margin-left: -12px;
margin-top: 5px;
position: relative;
z-index: 20;
display: flex;
justify-content:  center;
align-items: center;
`
const BoltIcon = styled.img`
height: 12px;
width: 12px;
`

const Bottomtext = styled.div`

`
const Bottomheader = styled(tinyText)`
color: ${colorThemes.white};
`
const Bottomtextp = styled(tinyText)`
color: ${colorThemes.green};
margin: 4px 0;
`
export default Home
