import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components/index';
import {
  HomePage,
  SingleProductPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  AboutPage,
  ProductsPage,
  PrivateRoute,
  AuthWrapper,
} from './pages/index';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='products/:id' element={<SingleProductPage />} />
        <Route
          path='checkout'
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
