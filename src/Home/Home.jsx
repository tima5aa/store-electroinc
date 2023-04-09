import React from 'react'
import Poster from '../components/Poster/Poster';
import { useDispatch } from 'react-redux'
import Products from '../components/Products/Products';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories/Categories';


const Home = () => {
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);
  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories categories={categories.list} amount={5} title="Worth seeing" />
    </>
  )
}

export default Home;