import './App.css';
import Header from './container/Header';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetail';
function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path="/" element={<ProductListing/>}/>
      <Route path="/product/:productId" element={<ProductDetails/>}/>
      <Route>404 not found</Route>
      </Routes>
    </div>
  );
}

export default App;
