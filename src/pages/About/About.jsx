import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About Us</h2>
        </div>

        <div className='about-content'>
          <div className='about-img'>
            <img src={aboutImg} alt="About" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Welcome to BookHub</h2>
            <p className='fs-17'>At BookHub, we believe in the transformative power of books. Our library offers an extensive collection of books spanning various genres, including fiction, non-fiction, science, history, and more. Whether you're a casual reader or a dedicated bibliophile, you'll find something to ignite your imagination and satisfy your curiosity.</p>
            <p className='fs-17'>Our mission is to cultivate a love of reading within our community. We provide a welcoming and comfortable space where readers of all ages can explore new worlds, acquire knowledge, and find inspiration. Join us at BookHub and embark on your next literary adventure today!</p>
            <p className='fs-17'>In addition to our vast collection of books, we host regular events such as author talks, book signings, and reading clubs to foster a sense of community among our patrons. Our friendly staff is always available to assist you in finding your next great read or answer any questions you may have.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;