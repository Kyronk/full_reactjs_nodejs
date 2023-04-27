import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import { mobile } from "../responsive";

import { publicRequest } from "../requestMethod";

//redux
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0;
`;

const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`;

const FilterContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    ${mobile({ width: '100%'})}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid rgba(39, 38, 39, 0.236);
    border-radius: 30%;
    background-color: ${(props) => props.color};
    margin: 0 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    border-radius: 10px;
    text-transform: uppercase;
`;
const FilterSizeOption = styled.option`
    text-transform: uppercase;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    font-weight: 700;

    &:hover{
        background-color: #d4cdcdb3;
    }
`;

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState();
    const [size, setSize] = useState();

    const dispatch = useDispatch();

    

    const handleQuantity = (type) => {
        
        if(type === 'inc') {
            setQuantity(quantity + 1);
        }else {
            // if (quantity === 1) return; // cach 1 
            quantity > 1 && setQuantity(quantity - 1);
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                // setProduct(res.data)
                setProduct(res.data)
                console.log('check log product item', typeof res.data.color);
            } catch (error) {
                
            }
        }
        
        getProduct();
    }, [id])

    const handleClick = () => {
        // dispatch(
        //     addProduct({
        //             product,
        //             quantity,
        //             price: product.price * quantity,
        //     })
        // )
        dispatch(
            addProduct({
                ...product,
                color,
                quantity,
                size,
            })
        )
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    {/* <Image src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/447647/item/vngoods_64_447647.jpg?width=1600&impolicy=quality_75" /> */}
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    {/* <Title>This is Jean</Title> */}
                    <Title>{product.title}</Title>

                    <Desc>
                        <span>{product.desc}</span>
                        <br/>
                        -
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quibusdam amet, magnam, quae reprehenderit quasi
                        itaque porro dolorem vitae cupiditate voluptates saepe
                        assumenda iste modi rerum ad tempore, quaerat aut
                        eligendi!
                    </Desc>
                    <Price>$ {product.price} biden</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {/* {
                                product.color.map((c, index) => {
                                    return(
                                        <FilterColor color={c} key={c} />
                                    )
                                })
                            } */}
                            
                {/* 
                    1 Array => có nhiều phàn tử bên trong thường là các object
                    ở đây là các object đã đc lấy ra từ 1 mảng 
                    bên trong object này lại có array con
                    dùng map lập qua các phần tử khồng đuọc nên dùng cú pháp ?
                    
                    bình thường thì product.color.map || product.size.map X có lẽ cách này trong quá khứ từng dùng đc 

                    hiện tại phải dùng product.color?.map(  sym map )  .... tương tự như v product.size?.map
                    trong array này sẽ không có id nên ta có thể dùng index hay chính value bên trong
                    thường trường hợp này thì ta dùng cho màu sắc size đồ size thức ăn to nhỏ vừa , ...
                */}

                            {product.color?.map((c) => {
                                    return(
                                        < FilterColor 
                                            color={c} 
                                            key={c}
                                            
                                        />)
                            })}

                            {/* <FilterTitle>Color</FilterTitle> */}
                            {/* <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" /> */}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize
                                onChange={(e) => setSize(e.target.value)}
                            >

                            {
                                product.size?.map((size) => {
                                    return(
                                        <FilterSizeOption
                                        key={size}
                                        >{size}</FilterSizeOption>
                                        )
                                    })
                                }
                            </FilterSize>
                            {/* <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize> */}
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity('dec')}/>
                            <Amount>{quantity}</Amount>
                            <Add  onClick={() => handleQuantity('inc')}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default Product;
