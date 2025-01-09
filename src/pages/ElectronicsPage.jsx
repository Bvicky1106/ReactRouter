import React from 'react';
import { useNavigate } from 'react-router-dom';
import { electronics } from '../data/dataset.jsx';

function ElectronicsPage() {
  const navigate = useNavigate();

  // Navigate to home page
  const navigatetohome = () => {
    navigate('/');
  };

  // Navigate to specific product details page
  const navigatetoproducts = (id) => {
    navigate(`/electronics/${id}`);
  };

  return (
    <div>
      <div className="card-header">
        <h1>Electronics Page</h1>
        <button className="btn-danger-link" onClick={navigatetohome}>
          Home Page
        </button>
      </div>
      <div className="card-grid">
        {electronics.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.imageLink} alt={item.name} />
              <p>
                <span className="product-details">Product:</span> {item.name}
              </p>
              <p>
                <span className="product-details">Price:</span> {item.price}
              </p>
              {/* Pass item.id to the function */}
              <button
                className="btn-link"
                onClick={() => navigatetoproducts(item.id)}
              >
                View Product
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ElectronicsPage;
