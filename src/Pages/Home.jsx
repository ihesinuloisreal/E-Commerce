import { Search } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../Component/Navbar'

const Container = styled.div`
    height: 60px;

`

const Wrapper = styled.div`
    padding: 10px 200px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
  flex:1;
`
const Languege = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`

`
const Center = styled.div`
  flex:1;
`
const Right = styled.div`
  flex:1;
`

const Home = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
          <Languege>EN</Languege>
          <SearchContainer>
            input
            <Search/>
          </SearchContainer>
          
        </Left>
        <Center>center</Center>
        <Right>right</Right>
        </Wrapper>
    </Container>
  )
}

export default Home