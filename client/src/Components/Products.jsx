import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import ProductItem from "./ProductItem.jsx";

import { popularProducts } from "../data.js";

const Container = styled.div`
    /* display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between; */

    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

// nhận được props từ productList 
// nhớ log props ra để chắt chắn đã nhận đc dữ liệu mong muốn

const Products = ({cat, filter, sort}) => {
    //console.log("check props", cat, filter, sort);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    // useEffect(() => {
    //     const getProducts = async () => {
    //         try{
    //             const res = await axios.get(`http://localhost:5000/api/products?category=${cat}`);
    //             const res = await axios.get(`http://localhost:5000/api/products?category=coat`);
    //             const res = await axios.get("http://localhost:5000/api/products");
    //             console.log('check data raw products', res.data);
                
    //             setProducts(res.data);
    //         }catch(err) {}
    //     }
    //     getProducts()
    //},[cat]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"

                );
                // console.log('>>> check res filter data ', res.data)
                setProducts(res.data);

            } catch (err) {}
        };
        
        getProducts();
    }, [cat]);


    // useEffect(() => {
    //     cat && setFilteredProducts(
    //         products.filter((item) => {
    //             Object.entries(filter).every(([key, value]) => 
    //                 item[key].includes(value)
    //             )
    //         })
    //     )
    // }, [cat, filter, products ])

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filter).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filter]);

    useEffect(() => {
        if(sort==='newest') {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => a.createAt - b.createAt)
            )
        } else if ((sort === 'asc')) {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => a.price - b.price)
            )
        } else {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <Container>
            {/* {
                popularProducts.map((item) => {
                    return(
                        <ProductItem item={item} key={item.id}/>
                    )
                })
            } */}
            {cat 
                ? filteredProducts.map((item, index) => {
                    return(
                        <ProductItem item={item} key={item._id}/>
                    )
                })
                :products.slice(0,8).map((item) => {
                    return(
                        <ProductItem item={item}  key={item._id} />
                    )
                }) 

            }
        </Container>
        );
};

export default Products;
