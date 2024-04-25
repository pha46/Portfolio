import React from 'react';
import './App.css';
import abotMe from './assets/aboutme.jpg';

function App() {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <a href="#hero">Home</a>
          <a href='#about'>About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <section id="hero">
          <h1>Hi, I am Pravinkumar Harne👋</h1>
          <p>Full Stack MERN Web Developer.</p>
          <a href="#contact">Contact Me</a>
        </section>
      </header>
      <main>
        <section id='about'>
          <h2>About Me</h2>
          <div style={{
            display:'flex',
            flexDirection:'row',
            justifyItems:'center',
            justifyContent:'space-between',
            width:'100%'
          }}>
            <div style={{
              backgroundImage:abotMe,
              backgroundSize:'cover'
            }}>
            </div>
            <div style={{
              backgroundColor:'yellow'
            }}>
              <h3>welcome</h3>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2</p>
          </div>
          {/* Add more project entries as needed */}
        </section>
        <section id="services">
          <h2>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            {/* Add more services as needed */}
          </ul>
        </section>
        <section id="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <blockquote>Client testimonial 1</blockquote>
            <cite>- Client 1</cite>
          </div>
          <div className="testimonial">
            <blockquote>Client testimonial 2</blockquote>
            <cite>- Client 2</cite>
          </div>
          {/* Add more testimonials as needed */}
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Pravinkumar Harne</p>
      </footer>
    </div>
  );
}

export default App;