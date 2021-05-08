import React from 'react'
import styled from 'styled-components'

const Section = ({name, songname, songnumber}) => {

    return (
      <Body>

<SectionBody>
<LargeCard>
<Spotify/>

<Details>
    <Name>{name}</Name>
    <Detailsrow>
<Songname>
    {songname}
</Songname>
<Songnumber>
    {songnumber}
</Songnumber>
    </Detailsrow>
</Details>

</LargeCard>
<MediumCard>

</MediumCard>
<SmallCard>
    
</SmallCard>
</SectionBody>
      </Body>
    )
}

const Body = styled.div`
width: 100%;
height: 100%;

`
const SectionBody = styled.div`
width: 100%;
height: 100%;
`
const LargeCard = styled.div`
width: 300px;
border-radius: 10px;
height: 400px;
`
const MediumCard = styled.div`

`
const SmallCard = styled.div`

`

const Spotify = styled.div`

`
const Details = styled.div`

`
const Name = styled.div`

`
const Detailsrow = styled.div`

`
const Songname = styled.div`

`
const Songnumber = styled.div`

`
export default Section
