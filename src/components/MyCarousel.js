import React, { useState, useRef, useLayoutEffect, } from 'react'
import { useHistory } from 'react-router-dom'
import Carousel from 'react-spring-3d-carousel';
import styled from 'styled-components/macro'
import { config } from "react-spring";
import fische from '../assets/SVG/fische.svg'
import jungfrau from '../assets/SVG/jungfrau.svg'
import krebs from '../assets/SVG/krebs.svg'
import löwe from '../assets/SVG/löwe.svg'
import schütze from '../assets/SVG/schütze.svg'
import skorpion from '../assets/SVG/skorpion.svg'
import stier from '../assets/SVG/stier.svg'
import waage from '../assets/SVG/waage.svg'
import wasserman from '../assets/SVG/wasserman.svg'
import zwillinge from '../assets/SVG/zwillinge.svg'
import widder from '../assets/SVG/widder.svg'
import steinbock from '../assets/SVG/steinbock.svg'
import { H1 } from "../components/base/headings"
import { ReactComponent as Forward } from "../assets/icons/icons8-play.svg"
import Hammer from 'hammerjs'


const MyCarousel = () => {
    let history = useHistory()
    const slides = [
        {
            key: "Steinbock",
            content: <img src={steinbock} alt="1" />
        },
        {
            key: "Wasserman",
            content: <img src={wasserman} alt="2" />
        },
        {
            key: "Fische",
            content: <img src={fische} alt="3" />
        },
        {
            key: "Widder",
            content: <img src={widder} alt="4" />
        },
        {
            key: "Stier",
            content: <img src={stier} alt="5" />
        },
        {
            key: "Zwillinge",
            content: <img src={zwillinge} alt="6" />
        },
        {
            key: "Krebs",
            content: <img src={krebs} alt="7" />
        },
        {
            key: "Löwe",
            content: <img src={löwe} alt="8" />
        },
        {
            key: "Jungfrau",
            content: <img src={jungfrau} alt="9" />
        },
        {
            key: "Waage",
            content: <img src={waage} alt="10" />
        },
        {
            key: "Skorpion",
            content: <img src={skorpion} alt="11" />
        },
        {
            key: "Schütze",
            content: <img src={schütze} alt="12" />
        }
    ].map((slide) => {
        return { ...slide, onClick: () => history.push(`horoskop/${slide.key}`) }
    });

    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 1,
        showNavigation: false,
        config: config.gentle
    })

    const getCurrentZodiac = (currentSlide) => {
        console.log(currentSlide)
        return slides.find((slide, index) => {
            return index === currentSlide

        })

    }

    const slideForward = () => {
        setState((state) => ({
            ...state,
            goToSlide: Math.abs(state.goToSlide + 1) % 12
        }))
    }

    const slideBackward = () => {
        const step = state.goToSlide - 1
        const nextStep = step < 0 ? 12 + step : step

        setState((state) => ({
            ...state,
            goToSlide: nextStep
        }))
    }

    const carouselRef = useRef()
    const zodiac = getCurrentZodiac(state.goToSlide).key

    useLayoutEffect(() => {
        const hammertime = new Hammer(carouselRef.current)
        hammertime.on('swipeleft', slideForward)
        hammertime.on('swiperight', slideBackward)
        setState({ ...state, hammertime })
    }, [])


    return (
        <Container ref={carouselRef}>
            <Carousel slides={slides}
                goToSlide={state.goToSlide}
                offsetRadius={state.offsetRadius}
                showNavigation={state.showNavigation}
                animationConfig={state.config} />
            <ButtonWrapper>
                <RoundButton onClick={slideBackward}>
                    <BackwardButton></BackwardButton>
                </RoundButton>
                <RoundButton onClick={slideForward}>
                    <Forward></Forward>
                </RoundButton>
            </ButtonWrapper>
            <Line></Line>
            <H1>{zodiac}</H1>
        </Container>
    );
}

export default MyCarousel

const Container = styled.div`
height: 300px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const ButtonWrapper = styled.div`
position:relative;
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 20px;
`
const RoundButton = styled.div`
width: 50px;
height: 50px;
border-radius: 50px;
background: #ffffff;
-webkit-box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
padding: 5px;
transition: all 0.2 linear;

    &:active {
        transform: scale(0.8)
    }
`
const BackwardButton = styled(Forward)`
    transform: rotate(180deg);
`

const Line = styled.div`
height: 2px; 
width: 90%;
background:#f6f7f7;
margin-bottom: 20px;
`



