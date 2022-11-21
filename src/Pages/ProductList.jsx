import styled from "styled-components"
import Navbar from "../Component/Navbar"
import Announcement from "../Component/Announcement"
import Products from "../Component/Products"
import Newsletter from "../Component/Newsletter"
import Footer from '../Component/Footer'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>

        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Product
                </FilterText>
                <Select>
                    <Option disabled selected> Color </Option>
                    <Option> White </Option>
                    <Option> Black </Option>
                    <Option> Red </Option>
                    <Option> Blue </Option>
                    <Option> Yellow </Option>
                    <Option> Green </Option>
                </Select>
                <Select>
                    <Option disabled selected> Size </Option>
                    <Option> XS </Option>
                    <Option> S </Option>
                    <Option> M </Option>
                    <Option> L </Option>
                    <Option> XL </Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Product
                </FilterText>
                <Select>
                    <Option disabled selected> Newest </Option>
                    <Option> Price (asc) </Option>
                    <Option> Price (desc) </Option>
                </Select>
                
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList