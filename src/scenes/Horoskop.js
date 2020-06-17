import React from 'react'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import { H1, H2, P } from "../components/base/headings"
import { useEffect, useState } from 'react'




const Horoskop = () => {
    let params = useParams();
    const zodiac = params.zodiac.toLowerCase();
    const url = `http://localhost:2500/api/horoscope?zodiacSign=${zodiac}&time=heute`;
    const [apiHoroscope, setApiHoroscope] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const result = await res.json()
            console.log(result)
            setApiHoroscope(result[0])
        }
        fetchData();
    }, [])

    const src = `/assets/SVG/${params.zodiac}.svg`
    const { title, horoscope: { vormittag = "", nachmittag = "", abend = "" } = {} } = apiHoroscope;

    return (
        <div>
            <Wrapper>
                <Card>
                    <Image src={src} alt="" />
                    <Line></Line>
                    <H1>{params.zodiac}</H1>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <H2 fontSize="18px" marginBottom="0px">{title}</H2>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <H2>Vormittag</H2>
                    <P marginBottom="0px">{vormittag}</P>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <H2>Nachmittag</H2>
                    <P marginBottom="0px">{nachmittag}</P>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <H2>Abend</H2>
                    <P marginBottom="0px">{abend}</P>
                </Card>
            </Wrapper>
        </div>
    )

}

export default Horoskop;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 150px;
`
const Line = styled.div`
height: 2px;
width: 90%;
background:#f6f7f7;
margin-top: 20px;
margin-bottom: 20px;
`




