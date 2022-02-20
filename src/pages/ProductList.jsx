import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div``

const Title = styled.h1`
    margin: 2em;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 2em;

`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 1em;

`
const Select = styled.select`
    padding: 0.5em;
    margin-right: 1em;
`
const Option = styled.option`
    
`
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
            <FilterText>
            Filter Products:
            </FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Purple</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
                <Option>Orange</Option>
                <Option>Red</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                <Option>XXXL</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>
            Sort Products:
            </FilterText>
            <Select>
                <Option disabled selected>
                    Newest
                </Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
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
