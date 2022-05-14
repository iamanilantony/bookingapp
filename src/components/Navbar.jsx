import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    width: 100%;
    background-color:  #003580;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78px;
`
const Wrapper = styledComponents.div`
    color: #ffffff;
    width: 80%;
    display: flex;
    justify-content: space-between;
`
const Left = styledComponents.div`
    
`
const P = styledComponents.span`
    font-size: 22px;
    font-weight: 600;
`
const Right = styledComponents.div`
    
`
const Button = styledComponents.button`
    margin-right: 20px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    padding: 12px;
    border: none;
    background-color: #006aff;
    color: white;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <P>K&A Booking</P>
            </Left>
            <Right>
                <Button>
                    Register
                </Button>
                <Button>
                    Login
                </Button>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar