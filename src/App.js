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

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/categories' element={ <CategoriesPage/> } />
        <Route path='/product' element={ <ProductPage/> } />
        <Route path='/basket' element={ <BasketPage/> } />
        <Route path='/not_found' element={ <NotFoundPage/> } />
        <Route path='/categories/:category_name' element={ <ProductsCategoryPage/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
