import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
   margin-top: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
   
`
const Wrapper = styledComponents.div`
    display: flex;
    width: 80%;

  
`
const ImageContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 25px 40px 25px 0;
    position: relative;
    transition: 0.5s ease;
    &:hover{
        transform: scale(1.05);
    }
`
const Img = styledComponents.img`
    width: 350px;
    height: 250px;
    border-radius: 20px;
`
const TitleContainer = styledComponents.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 25px;
    left: 25px;
    
`
const Title = styledComponents.span`
    font-size: 32px;
    font-weight: 600;
`
const H2 = styledComponents.span`
    font-size: 18px;
    font-weight: 200;
`

const Featured = () => {
  return (
    <Container>
        <Wrapper>
            <ImageContainer>
            <Img 
            src="https://media.cntraveller.com/photos/611bf348ef6cd547152d720b/master/w_960%2Cc_limit/view-of-the-scalp-from-barnaslingan-hill-dublin-mountains-ireland-conde-nast-traveller-5feb16-joe-king.jpg" 
            alt=""
            />
            <TitleContainer>
            <Title>
                Dublin
            </Title>
            <H2>
                123 properties
            </H2>
            </TitleContainer>
            </ImageContainer>
            <ImageContainer>
            <Img 
            src="https://cdn.thecrazytourist.com/wp-content/uploads/2019/03/ccimage-shutterstock_769311505.jpg" 
            alt=""
            />
            <TitleContainer>
            <Title>
                Austin
            </Title>
            <H2>
                123 properties
            </H2>
            </TitleContainer>
            </ImageContainer>
            <ImageContainer>
            <Img 
            src="https://cdn.thecrazytourist.com/wp-content/uploads/2019/03/Austin-In-A-Nutshell-Bike-Tour.jpg" 
            alt=""
            />
            <TitleContainer>
            <Title>
                Texas
            </Title>
            <H2>
                123 properties
            </H2>
            </TitleContainer>
            </ImageContainer>
            <ImageContainer>
            <Img 
            src="https://cdn.thecrazytourist.com/wp-content/uploads/2019/03/ccimage-shutterstock_1080687155.jpg" 
            alt=""
            />
            <TitleContainer>
            <Title>
                San Jose
            </Title>
            <H2>
                123 properties
            </H2>
            </TitleContainer>
            </ImageContainer>
        </Wrapper>
    </Container>
  )
}

export default Featured