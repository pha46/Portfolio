import React, {useState} from 'react';
import './App.css';
import aboutMe from './assets/aboutme.jpg';
import git from './assets/git.svg';
import mongoDB from './assets/mongodb.svg';
import react from './assets/react.svg';
import nodejs from './assets/nodejs.svg';
import express from './assets/Express.svg';
import netlify from './assets/netlify.svg';
import vercel from './assets/vercel.svg';
import githubPages from './assets/github-Pages.svg';
import mui from './assets/material-ui.svg';
import tailwindcss from './assets/tailwind-css.svg';
import redux from './assets/redux.svg';
import render from './assets/render.svg';
import { Slide } from "react-awesome-reveal";
import Projects from './components/projects';

function App() {
  const [FormData, setFormData] = useState({
    senderName:"",
    senderEmail:"",
    message:""
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    fetch('https://emailme.onrender.com/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData)
    }).then(response => {
      setLoading(false);
      if (response.ok) {
        setResponseMessage('Message sent successfully');
      } else {
        throw new Error('Failed');
      }
    }).catch(error => {
      setLoading(false);
      setResponseMessage('Error: '+ error.message);
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...FormData, [name]: value });
  }
  

  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <a href="#hero">Home</a>
          <a href='#about'>About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>Hi, I am Pravinkumar Harne👋</h1>
          <p>Full Stack MERN Web Developer.</p>
          <a href="#contact">Contact Me</a>
        </section>
        <section id='about'>
          <h2>About Me</h2>
          <div style={{
            display:'flex',
            flexDirection:'row',
            justifyItems:'center',
            justifyContent:'space-between',
            width:'100%'
          }}>
            <Slide direction='left'>
            <div style={{
              backgroundImage:`url(${aboutMe})`,
              backgroundSize:'contain',
              width:'1348px',
              height:'520px'
            }}>

              <div style={{
              backgroundColor:'transparent',
              width:'100%',
              height:'50%',
              paddingTop:'5%',
              paddingRight:'1%',
              border:'none',
              position:'absolute',
              zIndex:'2'
            }}>
            {/* <Slide direction='bottom'> */}
              <div style={{
                backgroundColor:'lavender',
                width:'auto',
                borderRadius:'5px',
                marginLeft:'50%'
              }}>
                <p style={{
                  textAlign:'left',
                  padding:'10px',
                  paddingTop:'20px',
                  fontWeight:'lighter'
                }}>
                Web Developer with knowledge of React.js, Redux, node, mongoDB, HTML and CSS. <br/> currently learning React for Web Apllication.<br/><br/>

I am passionate programmer and a learner, born and brought up in India. <br/> Currently, I am enrolled in AlmaBetter - Full Stack Web Development Program.<br/><br/>

I love learning about new technologies, <br/> what problems are they solving and How can I use them to build better and scalable products.
                </p>
                <div style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  width:'80%',
                  justifySelf:'center',
                  padding:'10px',
                  marginLeft:'10px'
                }}>
                  <button onClick={() => window.location.href="#contact"} style={{border:'1px solid red',color:'red'}}>Contact</button>
                  <button style={{border:'1px solid green',color:'green'}}
                    onClick={() => window.open('https://docs.google.com/document/d/1yeLnPVmV4DpgdSTc_cw49zpB27JaWwdR/edit?usp=sharing&ouid=100320765830359048561&rtpof=true&sd=true', '_blank')}
                    >My Resume
                  </button>
                  <button style={{border:'1px solid blue',color:'blue'}}
                    onClick={() => window.open('https://github.com/pha46/', '_blank')}  
                    >GitHub
                  </button>
                  <button style={{border:'1px solid orange',color:'orange'}}
                    onClick={() => window.open('https://www.linkedin.com/in/pravinkumar-harne')}
                    >LinkedIn
                  </button>
                </div>
              </div>
            {/* </Slide> */}
            </div>
            </div>
            </Slide>
          </div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <Slide direction='right'> 
          <div className='cards'>
            <div className='div2 div3'>
              <div className='div4 focus'>
                <h3>Version Control</h3><hr/>
                <p>
                  <a className='card' 
                    href="https://git-scm.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={git} alt="GIT" /> 
                        GIT
                  </a>
                </p>
              </div>
              <div className='div4 focus'>
                <h3>Database</h3><hr/>
                  <a className='card' 
                    href="https://mongodb.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={mongoDB} alt="MongoDB" /> 
                        MongoDB
                  </a>
              </div>
            </div>
            <div className='div2 focus'>
              <h3>Library</h3><hr/>
                <a className='card' 
                    href="https://react.dev/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={react} alt="React" /> 
                        React
                </a>
                <a className='card' 
                    href="https://nodejs.org/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={nodejs} alt="NodeJS" /> 
                        NodeJS
                  </a>
                  <a className='card' 
                    href="https://mui.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={mui} alt="Material UI" /> 
                        Material UI
                  </a>
                  <a className='card' 
                    href="https://redux.js.org/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={redux} alt="ReduxJS" /> 
                        Redux JS
                  </a>
            </div>
            <div className='div2 focus'>
              <h3>Hosting Platform</h3><hr/>
                <a className='card' 
                    href="https://netlify.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={netlify} alt="Netlify" /> 
                        Netlify
                </a>
                <a className='card' 
                    href="https://vercel.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={vercel} alt="Vercel" /> 
                        Vercel
                  </a>
                  <a className='card' 
                    href="https://pages.github.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={githubPages} alt="Github Pages" /> 
                        GitHub Pages
                  </a>
                  <a className='card' 
                    href="https://render.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={render} alt="Render" /> 
                        Render
                  </a>
            </div>
            <div className='div2 focus'>
              <h3>Framework</h3><hr/>
                <a className='card' 
                    href="https://expressjs.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={express} alt="ExpressJS" /> 
                        Express JS
                  </a>
                  <a className='card' 
                    href="https://tailwindcss.com/" 
                    rel='noreferrer'
                    target="_blank">
                      <img src={tailwindcss} alt="TailwindCss" /> 
                        Tailwind CSS
                  </a>
            </div>
          </div>
          </Slide>
        </section><hr></hr>
        <section id="projects">
          <h2>Projects</h2>
          <Projects/>
        </section>
        <hr/>
        <section id="contact">
          <h2>Contact Me</h2>
          <form className='form' onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name"
              name='senderName'
              value={FormData.senderName}
              onChange={handleInputChange}
              required
            />
            <input 
              type="email"
              placeholder="Your Email"
              name='senderEmail'
              value={FormData.senderEmail}
              onChange={handleInputChange}
                
              required
            /><br/>
            <textarea 
              placeholder="Your Message"
              name='message'
              value={FormData.message}
              onChange={handleInputChange}
              required
            ></textarea><br/>
            <button type="submit">Send</button>
            {loading===false ? responseMessage && <p>{responseMessage}</p> :<p>Please Wait...</p>}
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
