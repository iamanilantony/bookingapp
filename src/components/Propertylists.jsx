import styledComponents from "styled-components"

const Container = styledComponents.div`
    margin-top: 3vh;
    display: flex;
    width: 98vw;
    justify-content: center;
`
const Wrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    align-items: right;
    overflow: hidden;
`
const Header = styledComponents.div`
    display: flex;
`
const H1 = styledComponents.div`
    font-size: 25px;
    font-weight: 600;
    margin-left: 15px;
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
    width: 17vw;
    height: 25vh;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
`
const Img = styledComponents.img`
    width: 17vw;
    height: 25vh;
    border-radius: 10px;
    transition: 0.5s ease;
    &: hover {
        transform: scale(1.05);

    }
`
const ItemTitle = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
`
const Itemplace = styledComponents.span`
    font-size: 16px;
    color: gray;
    padding-top: 5px;
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