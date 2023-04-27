// redux
import React from "react";
import { useSelector } from "react-redux";

// payment (ko biet lam :)) )
import StripeCheckout from "react-stripe-checkout";
// ui
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
`;

const Top = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(65, 63, 80, 0.3);
    margin: 0 10px;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 30px;
    height: 20px;
    border-radius: 5px;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
    margin-top: ${(props) => props.type === "total" && "45px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    console.log("cart ", typeof cart.products);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping in bag (2)</TopText>
                        <TopText>Your WishList (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Check out</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            
                                <Product key={product._id}>
                                    <ProductDetail>
                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName>
                                                <b>Product: </b>{product.title}
                                            </ProductName>
                                            <ProductId>
                                                <b>ID: </b> {product._id}
                                            </ProductId>
                                            <ProductColor color={product.color} />
                                            <ProductSize>
                                                <b>Size:</b> {product.size}
                                            </ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Add />
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Remove />
                                        </ProductAmountContainer>
                                        <ProductPrice> $ {product.price}</ProductPrice>
                                        <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                    </PriceDetail>
                                    
                                </Product>
                                
                            
                        ))} 
                        <Hr />
                        {/* <Product>
                            <ProductDetail>
                                <Image src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/qh1yrftymm3kpifgtkva/air-force-1.jpg" />
                                <Details>
                                    <ProductName>
                                        <b>Product: </b>Nike jod
                                    </ProductName>
                                    <ProductId>
                                        <b>ID: </b>1234556
                                    </ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize>
                                        <b>Size:</b> 37
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product> */}
                    </Info>

                    <Summary>
                        <SummaryTitle>Order Summary </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>$ -80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button> Checkout now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
