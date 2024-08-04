import { useEffect, useState } from 'react';
import './Products.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('src/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleClick = (productId) => {
    navigate(`/produtos/${productId}`);
  };

  return (
    <div className="produtos">
      <header className="navbar">
        <nav>
          <Navbar />
        </nav>
      </header>
      <h1>Produtos</h1>
      {products.map((category) => (
        <div key={category.id} className="category">
          <h2>{category.category}</h2>
          <div className="product-list">
            {category.products.map((product, index) => (
              <div
                key={index}
                className="product-card"
                onClick={() => handleClick(product.id)}
              >
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>R$ 100</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Products;
