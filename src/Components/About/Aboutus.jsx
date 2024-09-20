import React from 'react';
import "./Aboutus.css"

const Aboutus = () => {
  return (
    <>
      <section id="about-head" className="section-p1">
        <img src="https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/about/a6.jpg" alt="" />
        <div>
          <h2>Who We Are??</h2>
          <p>Lorem, ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sequi fugiat voluptas quo animi beatae perspiciatis. Veniam nesciunt ab aspernatur eveniet consequuntur voluptate quod dolorem quidem, eligendi, tenetur consequatur dolore.dolor sit amet consectetur adipisicing elit. Praesentium harum quo hic necessitatibus recusandae veritatis consectetur corporis earum dolorem tempora. Tempora fugiat quos eligendi modi atque sint consequuntur ipsam. Excepturi?</p>
          <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</abbr>
          <br /><br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee>
        </div>
      </section>
      <section id="about-app" className="section-p1">
        <h1>Download Our,<a href="#">App</a></h1>
        <div className="video">
          <video autoPlay muted loop src="https://i.imgur.com/aHu4GUn.mp4"></video>
        </div>
      </section>
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="https://i.imgur.com/DOOfqoB.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="https://i.imgur.com/7OirmRr.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="https://i.imgur.com/qGVDI0P.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="https://i.imgur.com/5FeZBQA.png" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="https://i.imgur.com/UxI4em7.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="https://i.imgur.com/A9xjMzt.png" alt="" />
          <h6>Support</h6>
        </div>
      </section>
      <section id="newsletter" className="section-p1">
        <div className="newstext">
          <h4>Signup For Newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign up</button>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
