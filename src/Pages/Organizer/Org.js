import React from "react";
import "./Org.css";
import OrgCard from "../../components/OrgCard/OrgCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import OrgHeading from "./OrgHeading/OrgHeading";


import Sarthak from "../../Assests/sarthak.jpg";
import Jaggu from "../../Assests/jaggu1.jpg";
import Aditya from "../../Assets/Aditya.jpg"
import KrishnaRai from "../../Assests/KrishnaRai.jpg";
import Sachin from "../../Assests/Sachin.jpg";


import Atharva from "../../Assets/Atharva.jpeg"
import Hitanshu from "../../Assets/Hitanshu.jpg"
import Pradeep from "../../Assets/Pradeep_Vidiyala.jpg"
import Kshitij from "../../Assets/Kshitij.jpeg"
import Laksh from "../../Assets/Laksh.jpeg"
import VPRM from "../../Assets/VPRM.jpg"
import Pranav from "../../Assets/Pranav.jpeg"
import Neel from "../../Assets/Neel.jpg"
import Prakarti from "../../Assets/prakarti_prabhakar.jpg";
import Aryan from "../../Assets/ARYAN KUMAR SAHA.jpg"
import Bhupesh from "../../Assets/Bhupesh Gupta.jpg"
import Hemanshu from "../../Assets/Hemanshu.jpg"
import Priyanshu from "../../Assets/PriyanshuMakwana.jpg"
import Rohith from "../../Assets/Rohith.jpg"

const Org = () => {
  return (
    <div className="event-page--container">
      <Navbar />
      <div className="anim-main-container">
        <h1 className="glitch org-main-heading">
          <span aria-hidden="true"> Core Organizers</span>
          Core Organizers
          <span aria-hidden="true"> Core Organizers</span>
        </h1>
      </div>
      
      <div className="card-container--organizer">
        <OrgCard image={Atharva} name={"Atharva More"} des="3rd Year" />
        <OrgCard image={Hitanshu} name={"Hitanshu Kaushik"} des="3rd Year" />
        <OrgCard image={Pradeep} name={"Vidiyala Pradeep"} des="3rd Year" />
      </div>

      <OrgHeading title="Hackathon" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Sarthak} name={"Sarthak Kumar"} des="4th year" />       
        <OrgCard image={Kshitij} name={"Kshitij Verma"} des="3rd year" />
        <OrgCard image={Laksh} name={"Lakshendra Sejwani"} des="2nd year" />
      </div>

      <OrgHeading title="Coding Contest" />

      <div className="card-container--organizer card-container--org">
        <OrgCard image={Jaggu} name={"Jagmohan Dixit"} des="4th year" />
        <OrgCard image={Aditya} name={"Aditya Pareek"} des="4th year" />
        <OrgCard image={Sachin} name={"Sachin Tayal"} des="4th year" />
        <OrgCard image={KrishnaRai} name={"Krishna Rai"} des="3rd year" />
      </div>

      <OrgHeading title="Venture Quest" />
      <div className="card-container--organizer card-container--org">
        
        <OrgCard image={Bhupesh} name={"Bhupesh Gupta"} des="3rd year" />
        <OrgCard image={Prakarti} name={"Prakarti Prabhakar"} des="2nd year" />
        <OrgCard image={Hemanshu} name={"Hemanshu"} des="2nd year" />
        <OrgCard image={Aryan} name={"Aryan Saha"} des="2nd year" />
        <OrgCard image={Priyanshu} name={"Priyanshu Makwana"} des="2nd year" />
      </div>
      <OrgHeading title="Model Runway" />
      <div className="card-container--organizer card-container--org">
      <OrgCard image={Pranav} name={"Pranav Tiwari"} des="4th year" />
        <OrgCard image={Atharva} name={"Atharva More"} des="3rd year" />
      </div>


      
      <OrgHeading title="Capture The Flag" />
      <div className="card-container--organizer card-container--org">
        
        <OrgCard image={VPRM} name={"Vijaya Pratap Reddy M"} des="4th year" />
        <OrgCard image={Rohith} name={"Rohith Bellur"} des="3rd year" />
        
      </div>

      <OrgHeading title="Line Chasers" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={Neel} name={"Neel Shah"} des="3rd year" />
        
      </div>

      <OrgHeading title="Crash Course" />
      <div className="card-container--organizer card-container--org">
        
      <OrgCard image={Neel} name={"Neel Shah"} des="3rd year" />
      </div>
      
      
     
      {/* <OrgHeading title="design team" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={bhavana} name={"Bhavana Vemuri"} des="4th year" />
        <OrgCard image={kamal} name={"Kamal Raj"} des="3rd year" />
        <OrgCard image={rohit} name={"Rohit Vathsal"} des="3rd year" />
        <OrgCard image={snigdha} name={"SAI SNIGDHA"} des="2nd year" />
        <OrgCard image={Bhadraksh} name={"Bhadraksh B."} des="2nd year" />
        <OrgCard image={abdul} name={"Abdul Akram"} des="2nd year" />
      </div> */}

      {/* <OrgHeading title="Workshop" />
      <div className="card-container--organizer card-container--org">
        <OrgCard image={HarshKumar} name={"Harsh Kumar"} des="3rd year" />
        <OrgCard image={Srinidhi} name={"Srinidhi"} des="2nd year" />
      </div> */}
      <hr className="hr" />
      <Footer />
    </div>
  );
};

export default Org;
