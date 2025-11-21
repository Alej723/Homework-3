import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// Navigation component that will be used on all pages
function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <img 
          id="logo"
          src="imgs/1.png" 
          alt="Restaurant Logo"
        />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
}

// Home Page
function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <img src="imgs/Hero.png" alt="Hero Image" />
      </section>
    </div>
  );
}

// About Page
function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src="imgs/Hero.png" alt="Hero" />
      </div>
      <div className="center">
        <h1>About Us</h1>
      </div>
      <br />
      <br />
      <div className="about-text">
        <h2>Welcome to Ale's Kitchen, where great food meets a warm and welcoming atmosphere.
             Our mission is to bring people together over delicious meals made from fresh, locally sourced ingredients.
              Whether you're here for a casual lunch, a family dinner, or a special celebration, we're committed to giving you an experience that feels like home.
               From our kitchen to your table, every dish is prepared with care, passion, and a love for good food.</h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

// Menu Page
function MenuPage() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <Navbar />
      
      {/* Cart Container */}
      <div className="cart-container">
        <h3>To go Cart</h3>
        <div id="cartItems">
          {cart.map((item, index) => (
            <div key={index}>
              {item.name} - ${item.price}
            </div>
          ))}
        </div>
        <hr />
        <div id="cartTotal"><strong>Total: ${calculateTotal()}</strong></div>
        <button className="cart-btn" onClick={clearCart} style={{ width: '100%', marginTop: '10px', backgroundColor: '#ff6b6b' }}>
          Clear Cart
        </button>
      </div>

      <div className="hero">
        <img src="imgs/Hero.png" alt="Hero" />
      </div>
      <br />
      <br />
      
      <div className="slideshow-container">
        <table>
          <tbody>
            <tr>
              <th>Appetizer</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Garlic Bread</td>
              <td>$7</td>
              <td><button className="cart-btn" onClick={() => addToCart('Garlic Bread', 7)}>Add to Cart</button></td>
            </tr>
            <tr>
              <td>Caesar Salad</td>
              <td>$5</td>
              <td><button className="cart-btn" onClick={() => addToCart('Caesar Salad', 5)}>Add to Cart</button></td>
            </tr>
            <tr>
              <td>Tomato Soup</td>
              <td>$5</td>
              <td><button className="cart-btn" onClick={() => addToCart('Tomato Soup', 5)}>Add to Cart</button></td>
            </tr>
            <tr>
              <th>Main Course</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>Grilled Chicken with Vegetables</td>
              <td>$14</td>
              <td><button className="cart-btn" onClick={() => addToCart('Grilled Chicken with Vegetables', 14)}>Add to Cart</button></td>
            </tr>
            <tr>
              <td>Margherita Pizza</td>
              <td>$15</td>
              <td><button className="cart-btn" onClick={() => addToCart('Margherita Pizza', 15)}>Add to Cart</button></td>
            </tr>
            <tr>
              <td>Spaghetti Bolognese</td>
              <td>$23</td>
              <td><button className="cart-btn" onClick={() => addToCart('Spaghetti Bolognese', 23)}>Add to Cart</button></td>
            </tr>
            <tr>
              <th>Desserts</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>Ice cream</td>
              <td>$4</td>
              <td><button className="cart-btn" onClick={() => addToCart('Ice cream', 4)}>Add to Cart</button></td>
            </tr>
            <tr>
              <td>Chocolate Cake</td>
              <td>$10</td>
              <td><button className="cart-btn" onClick={() => addToCart('Chocolate Cake', 10)}>Add to Cart</button></td>
            </tr>
            <tr>
              <td>Pie</td>
              <td>$6</td>
              <td><button className="cart-btn" onClick={() => addToCart('Pie', 6)}>Add to Cart</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

// Contact Page
function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src="imgs/Hero.png" alt="Hero" />
      </div>
      <h1 className="center">Find us at our location</h1>
      <div className="contact-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4080714465437!2d-73.96372828459442!3d40.770526779326065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ebc1f97afd%3A0x47c9a3dd7fe75877!2s68%20St-Hunter%20College!5e0!3m2!1sen!2sus!4v1633096766478!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="info-container">
          <h1>Our Hours</h1>
          <p>Mon-Fri: 9am - 9pm</p>
          <p>Sat-Sun: 10am - 6pm</p>
          <br />
          <br />
          <h1>Email</h1>
          <p>Manager: Zahra - Zahra1223@gmail.com</p>
          <p>Mobile: 914 288-5838</p>
          <h2>Follow Us</h2>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>
  );
}

// Gallery Page
function GalleryPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    { src: 'imgs/2.jpg', caption: 'Caption Text' },
    { src: 'imgs/3.jpg', caption: 'Caption Two' },
    { src: 'imgs/6.jpeg', caption: 'Caption Three' },
    { src: 'imgs/7.jpeg', caption: 'Caption Four' },
    { src: 'imgs/8.jpeg', caption: 'Caption Five' },
    { src: 'imgs/4.jpeg', caption: 'Caption Six' }
  ];

  const plusSlides = (n) => {
    let newSlide = currentSlide + n;
    if (newSlide >= slides.length) newSlide = 0;
    if (newSlide < 0) newSlide = slides.length - 1;
    setCurrentSlide(newSlide);
  };

  const setSlide = (n) => {
    setCurrentSlide(n);
  };

  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src="imgs/Hero.png" alt="Hero" />
      </div>
      
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`mySlides fade ${index === currentSlide ? 'active' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className="numbertext">{index + 1} / {slides.length}</div>
            <img src={slide.src} style={{ width: '100%' }} alt={slide.caption} />
            <div className="text">{slide.caption}</div>
          </div>
        ))}
        
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <br />
      
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

// Main App with Routes
export default function RestaurantWebsite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}