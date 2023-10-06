import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { WorkshopData } from "../../Data/WorkshopsData";


const Workshops = () => {
  return (
    <div className="event-page--container">
      <Navbar />
      <div className="anim-main-container">
        <h1 className="glitch heading-atrang-main">
          <span aria-hidden="true"> workshops & seminars</span>
          workshops & seminars
          <span aria-hidden="true"> workshops & seminars</span>
        </h1>
      </div>
      <div className="event-card--conatiner">
        {WorkshopData.map((mp)=>{
          return(
              <section class="record">
              <div class="record-arrow"></div>
              <div
                id="record1"
                class="record-display"
                style={{ backgroundImage: `url(${mp.image})` }}
              ></div>
              <div class="record-desc">
                <h1>{mp?.title}</h1>
                <p>{mp?.desc}</p>
                <button className="organizer-button">
          <a
            href={mp.link}
            target="_blank"
            className="organizer-button-a"
            rel="noreferrer"
          >
            REGISTER NOW
          </a>
        </button>
              </div>
            </section>
          )
        })}
        
      </div>
      <hr className="hr" />
      <Footer />
    </div>
  );
};

export default Workshops;
