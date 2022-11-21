import Navbar from "../Component/Navbar"
import Announcement from "../Component/Announcement"
import Newsletter from "../Component/Newsletter"
import Footer from '../Component/Footer'
import wear from "../img/Mercy-Johnson.jpg"
import styled from "styled-components"

const Container = styled.div``

const Wrapper = styled.div``

const ImgContainer = styled.div``

const Image = styled.img``

const InfoContainer = styled.div``

const Title = styled.h1``

const Desc = styled.p``

const Price = styled.span``


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={wear}/>
            </ImgContainer>
            <InfoContainer>
                <Title> Donim Jumsuite</Title>
                <Desc> 
                    There are many variation of Lorem Ipsum available, but 
                    the majority have suffered alteration in some form, by 
                    injected humour, or randomised words which don't look 
                    even slightly believable. 
                </Desc>
                <Price> $ 20</Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product