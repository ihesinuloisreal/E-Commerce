import styled from '@emotion/styled'
import CategoryItem from '../Component/CategoryItem'
import {Category}  from '../data'
import { mobile } from "../Responsive"


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
    
`
const Categories = () => {
  return (
    <Container>
        {Category.map(item => (
            <CategoryItem item = {item}/>
        ))}
    </Container>
  )
}

export default Categories