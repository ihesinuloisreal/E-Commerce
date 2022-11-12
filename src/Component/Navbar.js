import { Search } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-item: center;
    justify-content: space-between;
`

const Left = styled.div`
  flex:1;
  display: flex;
  align-tem: center;
  
`
const Languege = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
    ${'' /* border: 0.5px solid lightgray; */}
    ${'' /* display: flex; */}
    align-tem: center; 
    margin-left: 25px
    padding: 5px;
    
`
const Input = styled.input`
    ${'' /* border: none; */}
`

const Center = styled.div`
  flex:1;
  text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
  flex:1;
  align-item: center;
  justify-content: flex-end;
  display: flex;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  margin-left: 25px;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Languege>EN</Languege>
            <SearchContainer>
              <Input/>
              <Search style={{color: "gray",fontSize:16}}/>
            </SearchContainer>
          </Left>

          <Center>
            <Logo>SHOP.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar