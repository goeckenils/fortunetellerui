import React from 'react'
import styled from 'styled-components/macro'
import MyCarousel from '../components/MyCarousel'
import { H1, H2, P } from "../components/base/headings"





const Home = () => {
    return (
        <Container>
            <NavWrapper>
                <Nav>
                    <H2 color="#ffffff">fortuneteller</H2>
                </Nav>
            </NavWrapper>
            <Wrapper>
                <Card>
                    <MyCarousel></MyCarousel>
                </Card>
            </Wrapper>
        </Container>
    )

}

export default Home;

const Container = styled.div`
`

const Wrapper = styled.div`
padding: 10px
`

const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    overflow: hidden;
    padding: 10px
`

const NavWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #4f48ec;
`
const Nav = styled.div`
padding: 10px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
`

