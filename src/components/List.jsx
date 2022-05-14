import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    display: flex;
    justify-content: center;
`
const Wrapper = styledComponents.div`
    width: 80%
   
`
const Title = styledComponents.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
`
const Items = styledComponents.div`
    display: flex;

`
const ItemContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    margin-right: 25px;

`
const ImgContainer = styledComponents.div`
    width: 15vw;
    height: 20vh;
    // background-color: black;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
    &:hover{

    }
`
const Img = styledComponents.img`
    transition: 0.5s ease;
     &:hover{
        transform: scale(1.05);
    }

`
const Desc = styledComponents.div`
    
`
const DTitle = styledComponents.div`
    font-size: 20px;
    font-weight: 600;
`
const Text = styledComponents.div`
    font-size: 16px;
    font-weight: 400;
`
const List = () => {
  return (
    <Container>
        <Wrapper>
             <Title>
                 Browse by propert types
             </Title>
             <Items>
             <ItemContainer>
                 <ImgContainer>
                 <Img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="/>
                 </ImgContainer>
                 <Desc>
                     <DTitle>
                         Hotels
                     </DTitle>
                     <Text>
                         233 Hotels
                     </Text>
                 </Desc>   
             </ItemContainer>
             <ItemContainer>
             <ImgContainer>
                 <Img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"/>
                 </ImgContainer>
                 <Desc>
                     <DTitle>
                         Apartments
                     </DTitle>
                     <Text>
                         2331 Hotels
                     </Text>
                 </Desc>   
             </ItemContainer>
             <ItemContainer>
             <ImgContainer>
                 <Img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"/>
                 </ImgContainer>
                 <Desc>
                     <DTitle>
                         Resorts
                     </DTitle>
                     <Text>
                         233 Hotels
                     </Text>
                 </Desc>   
             </ItemContainer>
             <ItemContainer>
             <ImgContainer>
                 <Img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"/>
                 </ImgContainer>
                 <Desc>
                     <DTitle>
                         Villas
                     </DTitle>
                     <Text>
                         233 Hotels
                     </Text>
                 </Desc>   
             </ItemContainer>
             <ItemContainer>
             <ImgContainer>
                 <Img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"/>
                 </ImgContainer>
                 <Desc>
                     <DTitle>
                         Cabins
                     </DTitle>
                     <Text>
                         133 Hotels
                     </Text>
                 </Desc>   
             </ItemContainer>
             </Items>
        </Wrapper>
    </Container>
  )
}

export default List