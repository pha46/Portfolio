import React, { useState } from "react";
import './projects.css';
import { Slide } from "react-awesome-reveal";
import resumeBuilder from '../assets/Screenshot (12).png';
import youtubeSubscribers from '../assets/Screenshot (13).png';
import EntertainmentApp from '../assets/Screenshot (14).png';

function Projects() {
  const [visibleDiv, setVisibleDiv] = useState(null);

  const handleToggle = (divId) => {
    setVisibleDiv(visibleDiv === divId ? null : divId);
  }

    return (
      <Slide direction="left">
        <div className="projects">
          <div className="card-container">
              <div className="idlsoel">
                <div className="ilvQax">
                  <div className="project-title">
                      <div className="project-name">
                          <h3>
                            Resume Builder
                          </h3>
                      </div>
                  </div>
                  <div className="marker-col">
              <span className="marker">
              </span>
                  </div>
                  <div>
                    <div className="project-card">
              <div>
                <h4>Resume Builder</h4>
                <div class="accordion">
                  <img src={resumeBuilder}
                alt="Resume-builder"/>
                      <div>
                        <button onClick={() => handleToggle('project1')}>
                            PROJECT DETAILS
                        </button>
                        {visibleDiv === 'project1' && 
                        <div className="project-details">
                          <div class="card-body">
                      <strong>Description: </strong>
                        This is an Resume Builder website of having different templates, which provides various user choice selectable designs.<hr/><strong>
                        Features:</strong>
                        <ul class="list-styles pt-1">
                          <li>Provide selectable template Designs.</li>
                          <li>Downloadable PDF with preview</li>
                          <li>Minimal Designs</li></ul><hr/>
                          <strong>Tech used:</strong>
                        <ul>
                          <li><span class="p-2"> React</span></li>
                          <li><span class="p-2"> MUI Library</span></li>
                          <li><span class="p-2"> Redux</span></li>
                        </ul>
                          </div>
                        </div>}
                      </div>
                  </div>
                  <div className="project-url">
                            <a href="https://pha46.github.io/Resume-Builder/" 
                              class="url-button" target="_blank" rel='noreferrer'>
                                SEE LIVE
                            </a>
                            <a href="https://github.com/pha46/Resume-Builder.git"
                              class="url-button" target="_blank" rel='noreferrer'>
                                SOURCE CODE
                            </a>
                  </div>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <br></br>
          <div className="card-container">
              <div className="idlsoel">
                <div className="ilvQax">
                  <div className="project-title">
                      <div className="project-name">
                          <h3>
                            API - Youtube Subscribers
                          </h3>
                      </div>
                  </div>
                  <div className="marker-col">
              <span className="marker">
              </span>
                  </div>
                  <div>
                    <div className="project-card">
                <div>
                <h4>API - Youtube Subscribers</h4>
                <div class="accordion">
                  <img src={youtubeSubscribers} 
                alt="Youtbe Subscribers"/>
                      <div>
                        <button onClick={() => handleToggle('project2')}>
                            PROJECT DETAILS
                        </button>
                        {visibleDiv === 'project2' && 
                        <div className="project-details">
                          <div class="card-body">
                      <strong>Description: </strong>
                       This is an API for getting data from a Database.<hr/><strong>
                        Features:</strong>
                        <ul class="list-styles pt-1">
                          <li>Provided an Endpoint to retrieve data.</li>
                          <li>Using ID to get data</li></ul><hr/>
                          <strong>Tech used:</strong>
                        <ul>
                          <li><span class="p-2"> Node JS</span></li>
                          <li><span class="p-2"> MongoDB</span></li>
                          <li><span class="p-2"> Express JS</span></li>
                        </ul>
                          </div>
                        </div>}
                      </div>
                  </div>
                  <div className="project-url">
                            <a href="https://youtube-subscribers-teiw.onrender.com/" 
                              class="url-button" target="_blank" rel='noreferrer'>
                                SEE LIVE
                            </a>
                            <a href="https://github.com/pha46/YouTube_Subscribers.git" 
                              class="url-button" target="_blank" rel='noreferrer'>
                                SOURCE CODE
                            </a>
                  </div>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="card-container">
              <div className="idlsoel">
                <div className="ilvQax">
                  <div className="project-title">
                      <div className="project-name">
                          <h3>
                            Entertainment APP
                          </h3>
                      </div>
                  </div>
                  <div className="marker-col">
              <span className="marker">
              </span>
                  </div>
                  <div>
                    <div className="project-card">
              <div>
                <h4>Entertainment APP</h4>
                <div class="accordion">
                  <img src={EntertainmentApp}
                alt="EntertainmentApp"/>
                      <div>
                        <button onClick={() => handleToggle('project3')}>
                            PROJECT DETAILS
                        </button>
                        {visibleDiv === 'project3' && 
                        <div className="project-details">
                          <div class="card-body">
                      <strong>Description: </strong>
                      This is an entertainment website that provides a searchable catalog of movies and TV shows. Users can save their favorite selections by bookmarking them for later viewing. The site also offers a portfolio builder with various template options for entertainers.<hr/><strong>
                        Features:</strong>
                        <ul class="list-styles pt-1">
                          <li>Searchable database of movies and TV shows</li>
                          <li>Bookmarking feature for saving favorite selections</li>
                          <li>Portfolio builder with customizable templates</li></ul><hr/>
                          <strong>Tech used:</strong>
                        <ul>
                          <li><span class="p-2"> Frontend: React with MUI Library</span></li>
                          <li><span class="p-2"> Backend: Node.js with Express.js</span></li>
                          <li><span class="p-2"> Database: MongoDB</span></li>
                        </ul>
                          </div>
                        </div>}
                      </div>
                  </div>
                  <div className="project-url">
                            <a href="https://client-anhb.onrender.com/" 
                              class="url-button" target="_blank" rel='noreferrer'>
                                SEE LIVE
                            </a>
                            <a href="https://github.com/pha46/EntertainmentApp.git"
                              class="url-button" target="_blank" rel='noreferrer'>
                                SOURCE CODE
                            </a>
                  </div>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
        </div>
        </Slide>
    );
}

export default Projects;