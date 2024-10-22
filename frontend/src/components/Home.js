import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Product Showcase</h1>
        <p>Your one-stop destination for amazing products!</p>
      </header>
      <section className="home-content">
        <div className="content-card">
          <h2>Explore Our Products</h2>
          <p>Discover a wide range of products across various categories that cater to all your needs. From electronics to home essentials, we have it all!</p>
        </div>
        <div className="content-card">
          <h2>Sign Up Today!</h2>
          <p>Join our community to access exclusive offers and stay updated on the latest products. Signing up is quick and easy!</p>
        </div>
        <div className="content-card">
          <h2>Why Choose Us?</h2>
          <p>We prioritize quality and customer satisfaction. Our products are carefully selected to ensure you get the best value for your money.</p>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
