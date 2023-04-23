import React, { useEffect } from "react";


//components
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import Midsection from "./Midsection";

//styles
const Component = styled(Box) `
padding:10px 10px;
background-color:#f2f2f2;
`

const Home = () => {

  const {products} =  useSelector(state => state.getProducts)
  console.log(products)
 
  const dispacth = useDispatch()

  useEffect(() => {
    dispacth(getProducts())
  },[dispacth])

  return (
    <>
      <Navbar />
      <Component>
       <Banner/>
       <MidSlide products={products} title="Deals of the Day" timer={true}/>
       <Midsection/>
       <Slide products={products} title="Discounts for You" timer={false}/>
       <Slide products={products} title="Suggesting Items" timer={false}/>
       <Slide products={products} title="Top Selection" timer={false}/>
       <Slide products={products} title="Recommended Items" timer={false}/> 
       <Slide products={products} title="Trending Offers" timer={false}/>
       <Slide products={products} title="Season's Top Picks" timer={false}/>
       <Slide products={products} title="Top Deals on Accesseries" timer={false}/>
      </Component>
    </>
  );
};

export default Home;
