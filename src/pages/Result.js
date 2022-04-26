import React, { Component } from 'react'
import styled from 'styled-components'
import CatImage from '../asset/cat_image.jpg'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ResultData } from '../asset/data/resultdata'

const Result = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Header>에비집사 판별기</Header>``
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img src={ResultData[0].image} className='rounded-circle' width={350} height={350} alt='고양이 로고'></img>
        </LogoImage>
        <Desc className='text-primary'>예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다.</Desc>
        <Button onClick={() => navigate('/')}>다시하기</Button>
      </Contents>
    </Wrapper>)
}
const Wrapper = styled.div`
height: 100vh;
font-family: "Simkyungha";
`
const Header = styled.div`
font-size: 40pt;
display: flex;
justify-content:center;
align-items:center;
`
const Contents = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`
const LogoImage = styled.div`
  margin-top: 10px;
`
const Desc = styled.div`
  font-size: 20pt;
  margin-top: 10px
`
export default Result;
