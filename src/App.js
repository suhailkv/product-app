import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import ProductDetailsPage from './components/ProductDetailsPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AddProductForm />} />
          <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
