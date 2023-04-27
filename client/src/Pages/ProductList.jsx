import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`;
const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0" })}
`;

const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    // const handleOnChangeSort = (event) => {
    //     setSort({
    //         sort: event.target.value
    //     })
    // }

    const handleFilters = (event) => {
        const value = event.target.value;
        setFilter({
            ...filter,
            [event.target.name]: value
        })

        /// nếu sài như v thì chỉ lấy ra đc một thuộc tính 1 lần ví dụ là chọn black log: black
        // chọn size S log Size S
        // mục tiêu của ta là lấy đc cả màu black + size S nên cần ...filter : copy lại toàn bộ state

        // setFilter({
        //     [event.target.name]: value
        // })

        
    }   
    console.log('>>>check filter', filter)
    
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses : {cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option value='white'>White</Option>
                        <Option value='black'>Black</Option>
                        <Option value='red'>Red</Option>
                        <Option value='blue'>Blue</Option>
                        <Option value='yellow'>Yellow</Option>
                        <Option value='green'>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option value='xs'>XS</Option>
                        <Option value='s'>S</Option>
                        <Option value='m'>M</Option>
                        <Option value='l'>L</Option>
                        <Option value='xl'>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            {/* truyền state từ ProductList sang products trong Component */}
            <Products cat={cat} filter={filter} sort={sort} />
            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default ProductList;
