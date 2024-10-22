import React, { useState } from 'react';
import './Products.css'; 

const Products = () => {
  const [product, setProduct] = useState([]); 
  const [showProducts, setShowProducts] = useState(false); 

  let url = "http://localhost:5000/Products"; 


  const getProducts = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        console.log(data);
        setShowProducts(true); 
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  };

  return (
    <>
      <div className="products-container">
        <h1 className="products-heading">Products</h1>
        <button className="button" onClick={getProducts}>Show Products</button> {/* Button to load products */}
      </div>
      {showProducts && ( // Display products only when fetched
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              {product.length > 0 ? (
                product.map((prod, index) => (
                  <tr key={index}>
                    <td>{prod.name}</td>
                    <td>{prod.category}</td>
                    <td>{prod.price}</td>
                    <td>{prod.brand}</td>
                    <td>{prod.stock}</td>
                    <td>{prod.ratings}</td>
                    <td>{prod.features}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No products available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Products;
