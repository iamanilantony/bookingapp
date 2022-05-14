import { faBed, faCalendar, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styledComponents from 'styled-components'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';

const Container = styledComponents.div`
    width: 100%
    height: 15vh;
    background-color:  #003580;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 10;
`
const Wrapper = styledComponents.div`
    width: 80%
    // position: relative;

`
const Buttons = styledComponents.div`
    display: flex;
    // justify-content: flex-start;
    margin-top: 2vh;
    margin-bottom: 6vh;
   
`
const Icons = styledComponents.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover{
        color: #979797;
    }

    margin-right: 3vw;
    &:first-child{
            border: 1px white solid;
            border-radius: 20px;
            padding: 10px;
    }
`
const Desc = styledComponents.div`
    margin-left: 5px;
`
const Info = styledComponents.div`
    margin-bottom: 100px;
`
const Title = styledComponents.h1`
    font-size: 35px;
`
const Description = styledComponents.p`
    font-size: 18px;
`
const Button1 = styledComponents.button`
    padding: 15px;
    font-size: 16px;
    background-color: #0067f7;
    border: none;
    color: white;
    border-radius: 10px;
`
const Searchcontainer = styledComponents.div`
    position: relative;
  
`
const Search = styledComponents.div`
    background-color: black;
    border: 2px #00347c solid;
    height: 30px;
    width: 100%;
    background-color: white;
    color: gray;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: -25px;
    padding: 15px;
    border-radius: 10px;
`
const SearchItems = styledComponents.div`
    display: flex;
    align-items: center;
`
const SearchDesc = styledComponents.div`
    margin-left: 10px;
    cursor: pointer;
`
const Searchdate = styledComponents.div`
    position: absolute;
    top: 75px;
    z-index: 10;
`
const P1 = styledComponents.span`
    margin-left: 10px;
    cursor: pointer;
`
const OptionItems = styledComponents.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 20px;
    top: 40px;
    width: 160px;
    background-color: #ffffff;
    padding: 15px;
    color: black;
    box-shadow: 5px 8px #e4e4e4;
    z-index: 10;
`
const OptionItem = styledComponents.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

`
const OptionText = styledComponents.div`
    font-size: 16px;
    margin-bottom: 12px;
    
`
const OptionCounter = styledComponents.div`
    display: flex;
    align-items: center;
`
const OptionCounterText = styledComponents.div`
    font-size: 16px;
    margin-left: 8px;
    margin-right: 8px;
    font-weight: 400;
`
const OptionCounterButton = styledComponents.button`
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    height: 28px;
    font-weight: 200;
    border: blue 1px solid;
    width: 18px;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: white;
`
const SearchDescinside = styledComponents.div`
    cursor: pointer;
`



const Header = () => {

    const [showdate, setShowdate] = useState(false);
    const [showOptions, SetShowOptions] = useState(false);

    //state for date
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      //state for options
    const [options,SetOptions] = useState({
        adult: 1,
        child: 0,
        room: 1,
    })  

    //counter function for no: of people and rooms
    const handleOption= (name,operation) =>{
        SetOptions((prev)=>{
            return {
                ...prev,
                [name]:operation==="i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
      
    
  return (
    <Container>
        <Wrapper>
            <Buttons>
                <Icons>
                    <FontAwesomeIcon icon={faBed}/>
                    <Desc>Stays</Desc>
                </Icons>
                <Icons>
                    <FontAwesomeIcon icon={faPlane}/>
                    <Desc>Flights</Desc>
                </Icons>
                <Icons>
                   <FontAwesomeIcon icon={faCar}/>
                    <Desc>Car Rentals</Desc>
                </Icons>
                <Icons>
                    <FontAwesomeIcon icon={faBed}/>
                    <Desc>Attractions</Desc>
                </Icons>
                <Icons>
                    <FontAwesomeIcon icon={faTaxi}/>
                    <Desc>Airport taxis</Desc>
                </Icons>
            </Buttons>
            <Info>
                <Title>
                    A lifetime of discounts? It's Genius.
                </Title>
                <Description>
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free K&A booking account
                </Description>
                <Button1>
                    SignIn/Register
                </Button1>
            </Info>
            <Searchcontainer>
            <Search>
                <SearchItems>
                    <FontAwesomeIcon icon={faBed}/>
                    <SearchDesc>
                        Where are you going?
                    </SearchDesc>
                </SearchItems>
                <SearchItems>
                    <FontAwesomeIcon icon={faCalendar}/>
                     <P1 onClick={()=>{setShowdate(!showdate)}}>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")} `}</P1>
                    <Searchdate>
                       
                    {showdate && <DateRange
                      editableDateInputs={true}
                      onChange={item => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                    />}

                    </Searchdate>
                </SearchItems>
                <SearchItems>
                    <FontAwesomeIcon icon={faPerson}/>
                        <SearchDesc>
                        <SearchDescinside onClick={()=>{SetShowOptions(!showOptions)}}>  {options.adult} Adult  {options.child} child  {options.room} Room </SearchDescinside>
                    
                    {showOptions && <OptionItems>
                            <OptionItem>
                                <OptionText >
                                    Adult
                                </OptionText>
                                <OptionCounter>
                                    <OptionCounterButton disabled={options.adult <= 1} onClick={()=>handleOption("adult","d")}>
                                        -
                                    </OptionCounterButton>
                                    <OptionCounterText>
                                    {options.adult}
                                    </OptionCounterText>
                                    <OptionCounterButton onClick={()=>handleOption("adult","i")}>
                                        +
                                    </OptionCounterButton>
                                </OptionCounter>
                            </OptionItem>
                            <OptionItem>
                                <OptionText>
                                    Child
                                </OptionText>
                                <OptionCounter>
                                    <OptionCounterButton disabled={options.child <= 0}  onClick={()=>handleOption("child","d")}>
                                        -
                                    </OptionCounterButton>
                                    <OptionCounterText>
                                        {options.child}
                                    </OptionCounterText>
                                    <OptionCounterButton onClick={()=>handleOption("child","i")}>
                                        +
                                    </OptionCounterButton>
                                </OptionCounter>
                            </OptionItem>
                            <OptionItem>
                                <OptionText>
                                     Rooms
                                </OptionText>
                                <OptionCounter>
                                    <OptionCounterButton disabled={options.room <= 1}  onClick={()=>handleOption("room","d")}>
                                        -
                                    </OptionCounterButton>
                                    <OptionCounterText>
                                        {options.room}
                                    </OptionCounterText>
                                    <OptionCounterButton onClick={()=>handleOption("room","i")}>
                                        +
                                    </OptionCounterButton>
                                </OptionCounter>
                            </OptionItem>
                            </OptionItems>
                             }
                        </SearchDesc>
                </SearchItems>
               
            
                <Button1>
                    Search
                </Button1>
            </Search>
            </Searchcontainer>
        </Wrapper>
    </Container>
  )
}

export default Header