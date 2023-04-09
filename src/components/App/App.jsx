import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'


import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes from '../Routes/Routes'


import { getCategories } from '../../features/categories/categoriesSlice'
import { getProducts } from '../../features/products/productsSlice'

const App = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getCategories());
  dispatch(getProducts());
}, [dispatch]);

  return (
    <div className='app'>
      <Header />

    <div className='container'>
      <SideBar />
      <AppRoutes />
    </div>

      <Footer />
    </div>
  )
}

export default App