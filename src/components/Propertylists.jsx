import styledComponents from "styled-components"

const Container = styledComponents.div`
    margin-top: 3vh;
    display: flex;
`
const Wrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
`
const Header = styledComponents.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const H1 = styledComponents.div`
    font-size: 25px;
    font-weight: 600;
`
const Rows = styledComponents.div`
    
`
const Rowitems = styledComponents.div`
    display: flex;
`
const Item = styledComponents.div`
    display: flex;
    flex-direction: column;
    margin-right: 25px;
    padding: 20px;
`
const Imgcontainer = styledComponents.div`
    width: 100%;
    height: 160px;
    display: flex;
    overflow: hidden;
`
const Img = styledComponents.img`
    
`
const ItemTitle = styledComponents.span`
    
`
const Itemplace = styledComponents.span`
    
`
const Itemprice = styledComponents.span`
    
`
const Itemrating = styledComponents.span`
    
`
const Rating = styledComponents.span`
    
`
const Ratetitle = styledComponents.span`
    
`

const Propertylists = () => {
  return (
    <Container>
        <Wrapper>
        <Header>
            <H1>Homes guests Love</H1>
        </Header>
        <Rows>
            <Rowitems>
                <Item>
                    <Imgcontainer>
                        <Img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="/>
                    </Imgcontainer>
                    <ItemTitle>
                        Aparthotel Stare Miasto
                    </ItemTitle>
                    <Itemplace>
                        Madrid
                    </Itemplace>
                    <Itemprice>
                        Starting from $120
                    </Itemprice>
                    <Itemrating>
                        <Rating>
                            8.9
                        </Rating>
                        <Ratetitle>
                            Excellent
                        </Ratetitle>
                    </Itemrating>
                </Item>
                <Item>
                    <Imgcontainer>
                        <Img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"/>
                    </Imgcontainer>
                    <ItemTitle>
                        Aparthotel Stare Miasto
                    </ItemTitle>
                    <Itemplace>
                        Madrid
                    </Itemplace>
                    <Itemprice>
                        Starting from $120
                    </Itemprice>
                    <Itemrating>
                        <Rating>
                            8.9
                        </Rating>
                        <Ratetitle>
                            Excellent
                        </Ratetitle>
                    </Itemrating>
                </Item>
                <Item>
                    <Imgcontainer>
                        <Img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="/>
                    </Imgcontainer>
                    <ItemTitle>
                        Aparthotel Stare Miasto
                    </ItemTitle>
                    <Itemplace>
                        Madrid
                    </Itemplace>
                    <Itemprice>
                        Starting from $120
                    </Itemprice>
                    <Itemrating>
                        <Rating>
                            8.9
                        </Rating>
                        <Ratetitle>
                            Excellent
                        </Ratetitle>
                    </Itemrating>
                </Item>
                <Item>
                    <Imgcontainer>
                        <Img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"/>
                    </Imgcontainer>
                    <ItemTitle>
                        Aparthotel Stare Miasto
                    </ItemTitle>
                    <Itemplace>
                        Madrid
                    </Itemplace>
                    <Itemprice>
                        Starting from $120
                    </Itemprice>
                    <Itemrating>
                        <Rating>
                            8.9
                        </Rating>
                        <Ratetitle>
                            Excellent
                        </Ratetitle>
                    </Itemrating>
                </Item>
            </Rowitems>
        </Rows>
        </Wrapper>
    </Container>
  )
}

export default Propertylists