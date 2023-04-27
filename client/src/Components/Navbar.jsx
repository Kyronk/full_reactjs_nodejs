import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material/";
import { mobile } from "../responsive";
import React from "react";
import styled from "styled-components";

// react redux
import { useSelector } from "react-redux";

// router
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    /* ${mobile({ backgroundColor: "red" })} */
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
    /* width: 33.3%; */
    flex: 1;
    display: flex;
    align-items: center;
`;

const Centre = styled.div`
    /* width: 33.3%; */
    flex: 1;
    text-align: center;
`;

const Right = styled.div`
    /* width: 33.3%;? */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    //style={{backgroundColor: 'red'}}

    const quantity = useSelector((state) => state.cart.quantity);

    //console.log('quantity :' , quantity)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" type="text"/>
                        <SearchOutlined
                            style={{ fontSize: "16px", color: "gray" }}
                        />
                    </SearchContainer>
                </Left>
                <Centre>
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Logo>LAMA.</Logo>
                    </Link>
                </Centre>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <Link to='/cart'>
                        <MenuItem>
                            {/* <Badge badgeContent={4} color="primary"> */}
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
