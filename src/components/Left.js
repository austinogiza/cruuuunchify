import React,  {useEffect} from 'react'
import styled from 'styled-components'
import Note from './Note'
import Section from './Section'
import {spotifyData} from '../utils/artist'


const Left = () => {
    useEffect(()=>{
        console.log(spotifyData)
            },[])


            return (
       <Body>
    

           <Note/>
           <Section />

         
       </Body>
    )
}

const Body = styled.div`
position: relative;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
`



export default Left
