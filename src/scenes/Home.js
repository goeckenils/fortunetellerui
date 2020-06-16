import React from 'react'
import styled from 'styled-components/macro'
import MyCarousel from '../components/MyCarousel'
import { H1, H2, P } from "../components/base/headings"





const Home = () => {
    return (
        <Wrapper>
            <NavWrapper>
                <Nav>
                    <H2 color="#ffffff">fortuneteller</H2>
                </Nav>
            </NavWrapper>
            <MyCarousel></MyCarousel>
        </Wrapper>
    )

}

export default Home;

const Wrapper = styled.div`
`

const NavWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #4f48ec;
`
const Nav = styled.div`
padding: 10px;
`

