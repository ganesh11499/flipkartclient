import { InputBase, styled, Box, List, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useSelector, useDispatch} from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'
import { Link } from 'react-router-dom';


const SearchContainer = styled(Box) `
width:38%;
background-color:#fff;
margin-left:10px;
border-radius : 2px
`

const InputSearchBox = styled(InputBase) `
padding-left:20px;
width:100%;
`
const ListWrapper = styled(List) `
position:absolute;
background:#fff;
color:#000;
margin-top:35px;
`

const Search = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch()

  const {products} = useSelector(state => state.getProducts)

  useEffect(() => {
   dispatch(getProducts())
  },[dispatch])

  const getText = (text) => {
    setText(text);
  }
  console.log(text)
  
  return (
   <SearchContainer  style={{display:'flex'}} >
     <InputSearchBox placeholder='Search fro Products, Brands & More'  onChange={(e) => getText(e.target.value)}/>
    
     <SearchIcon style={{padding:'5'}}/>
     {
      text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
               <ListItem>
                <Link to={`products/${product.id}`} style={{textDecoration:'none'}}
                onClick={() => setText('')}
                >
                {product.title.longTitle}
                </Link>
               </ListItem>
            ))
          }
        </ListWrapper>
     }
   </SearchContainer>
  )
}

export default Search