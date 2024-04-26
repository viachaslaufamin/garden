import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsCategoryPage from './pages/ProductsCategoryPage';
import ProductPage from './pages/ProductPage';
import BasketPage from './pages/BasketPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AllProductsPage from './pages/AllProducts';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/categories' element={ <CategoriesPage/> } />
        <Route path='/products' element={ <AllProductsPage/> } />
        <Route path='/basket' element={ <BasketPage/> } />
        <Route path='/not_found' element={ <NotFoundPage/> } />
        <Route path='/categories/:category_id' element={ <ProductsCategoryPage/> } />
        <Route path='/products/:product_id' element={ <ProductPage/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
