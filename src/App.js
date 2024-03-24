import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsCategoryPage from './pages/ProductsCategoryPage';
import BasketPage from './pages/BasketPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SalePage from './pages/SalePage';
import AllProductPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/categories' element={ <CategoriesPage/> } />
        <Route path='/basket' element={ <BasketPage/> } />
        <Route path='/not_found' element={ <NotFoundPage/> } />
        <Route path='/sale' element={ <SalePage/> } />
        <Route path='/all_product' element={ <AllProductPage/> } />
        <Route path='/categories/:category_id' element={ <ProductsCategoryPage/> } />
        <Route path='/product/:product_id' element={ <ProductPage/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
