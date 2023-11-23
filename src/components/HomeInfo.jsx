import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text.xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hello, I am <span className="font-semibold">Alex Collins</span> 👋<br></br>your friendly Bay Area based Software Engineer.
        </h1>
    ),
    2: (
        <InfoBox 
            text="I've worked on a lot of projects and picked up many skills along the way."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Curious about my most current project? Check it out here."
            link="/projects"
            btnText="Visit My Portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or looking for a prospective software dev? Look no further!"
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo