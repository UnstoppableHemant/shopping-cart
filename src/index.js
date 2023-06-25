import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingPage from './assets/shoppingPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Cart from './assets/commonComponents/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShoppingPage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals