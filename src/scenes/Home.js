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
                    <H2>Willkommen bei fortuneteller,</H2>
                    <P>lass dir dein tägliches Horoskop geben in dem du dein Sternzeichen auswählst du anklickst.</P>
                    <P>Probier es doch gleich mal aus!</P>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <MyCarousel></MyCarousel>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <P></P>
                </Card>
            </Wrapper>
        </Container>
    )

}

export default Home;

const Container = styled.div`
`

const Wrapper = styled.div`
padding: 10px 10px 0px 10px;
`

const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    overflow: hidden;
    padding: 20px;
`

const NavWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
-webkit-box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
background: #4f48ec;
height: 70px;
`
const Nav = styled.div`
`

