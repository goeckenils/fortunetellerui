import React from 'react'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'





const Horoskop = () => {
    let params = useParams();
    const src = `/assets/SVG/${params.zodiac}.svg`
    return (
        <Wrapper>
            <Image src={src} alt="" />
        </Wrapper>
    )

}

export default Horoskop;

const Wrapper = styled.div`
    padding: 10px;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
`


