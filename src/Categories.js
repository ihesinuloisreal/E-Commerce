import styled from '@emotion/styled'
import CategoryItem from './Component/CategoryItem'
import {Category}  from './data'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
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