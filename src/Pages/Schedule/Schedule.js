import React from "react";
import "./Schedule.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Schedule = ({ gotoAbout, gotoOrganizer }) => {
  return (
    <div className="event-page--container">
      <Navbar />
      <div className="anim-main-container">
        <h1 className="glitch heading-atrang-main">
          <span aria-hidden="true"> schedule</span>
          schedule
          <span aria-hidden="true"> schedule</span>
        </h1>
      </div>
      <div>

      <div class="hackathon">
          <div style={{display:"flex",justifyContent: "center", marginBottom: "2vw"}}>
            <h1 style={{backgroundColor: "#1e1f22",padding: "20px", paddingInline:"8vw", borderRadius: "10px"}}>Hackathon</h1>
          </div> 
          <div style={{display:"flex",justifyContent: "center"}}>
            <h3 class="hackdate">6th October,23 09:00 AM - 8th October,23 5:00 PM</h3>
          </div>
        </div>
        <div className="dayheading">
          <h1 style={{backgroundColor: "#1e1f22",padding: "20px", paddingInline:"7vw", borderRadius: "10px"}}>Day 1</h1>
        </div> 
        <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">6th October,23, 09:00 AM - 10:30 AM</h3>
                  <h1>Inauguration</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">6th October,23, 10:30 AM - 12:30 PM</h3>
                  <h1>Line Chasers</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">6th October,23, 01:30 PM - 5:00 PM</h3>
                  <h1>Open Source</h1>
                </div>
              </li>

              <li>
                <div class="timeline-content">
                  <h3 class="date">6th October,23, 05:00 PM - 07:00 PM</h3>
                  <h1>ML - Model Runway</h1>
                </div> 
              </li>
            </ul>
          </div>
        </div>




        <div className="dayheading">
          <h1 style={{backgroundColor: "#1e1f22",padding: "20px", paddingInline:"7vw", borderRadius: "10px"}}>Day 2</h1>
        </div> 
        <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">7th October,23, 9:30 AM - 12:30 PM</h3>
                  <h1>Crash Course</h1>
                </div>
              </li>
                            <li>
                <div class="timeline-content">
                  <h3 class="date">7th October,23, 1:30 PM - 4:30 PM</h3>
                  <h1>Venture Quest</h1>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">7th October,23, 5:00 PM - 6:00 PM</h3>
                  <h1>Capture The Flag</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="dayheading">
          <h1 style={{backgroundColor: "#1e1f22",padding: "20px", paddingInline:"7vw", borderRadius: "10px"}}>Day 3</h1>
        </div>
        <div class="container">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">8th October,23, 9:30 AM - 01:00 PM</h3>
                  <h1>Intro to Deep Learning and BIC</h1>
                </div>
              </li>
                            <li>
                <div class="timeline-content">
                  <h3 class="date">8th October,23, 02:00 PM - 04:30 PM</h3>
                  <h1>Competitive Coding</h1>
                </div>
              </li>
  
            </ul>
          </div>
        </div>


       
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
