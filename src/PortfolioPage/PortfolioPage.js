import React from 'react';



import Button from '../shared/components/FormElements/Button/Button';
import ProjectBox from '../shared/components/UIElements/ProjectBox/ProjectBox';
import ServiceBox from '../shared/components/UIElements/ServiceBox/ServiceBox';
import AboutTabs from './components/AboutTabs';
import './PortfolioPage.css';
const PortfolioPage = () => {
    return (
        <>
            <div id="home" >
                <div className='container' >
                    <h1>Hi, I'm Vanshul Ahuja <br />
                        <span> Web Developer </span> <br />
                        based in India.</h1>
                </div>
            </div>
            <div id="about">
                <div className='image-box' style={{ backgroundImage: `url('/assets/images/about/self.jpg')` }}>
                </div>
                <div className='about-text__wrapper'>
                    <h1>About Me</h1>
                    <div className='about-text'>
                        Currently a student of the PDPM - Indian Institute of Information Technology, Design and Manufacturing, Jabalpur of branch CSE with skills of full stack web development and basic Data Structures and Algorithms in C++.
                    </div>
                    <AboutTabs />
                    <div>

                    </div>
                </div>
            </div>
            <div id="service">
                <h1>Services I Offer</h1>
                <div className='service-box__wrapper'>
                    <ServiceBox title="Front-End Development" logo='uil uil-react'>
                        I can create amazing designs using react.js or by simply using HTML, CSS, JavaScript.
                    </ServiceBox>
                    <ServiceBox title="Back-End Development" logo='uil uil-database'>
                        I can create APIs using Node.js and Express.js and conneect them to a database using MySQL.
                    </ServiceBox>
                    <ServiceBox title="Competitive Coding" logo='uil uil-visual-studio'>
                        I can proficiently code in C++ programming language and i also know Java and C.
                    </ServiceBox>
                </div>
            </div>
            <div id="projects">
                <h1>My Latest Projects</h1>
                <div className='project-box__wrapper'>
                    <ProjectBox title="IGNITE" logo="ignite.png" gitlink="https://github.com/vanshul02/ignite-final">
                        It is a tournament hosting and participating platform for many e-sports games like Call of Duty: Mobile, Battlegrounds Mobile India, Call of Duty: Warzone and many more. <br /> <br />
                        Developed using HTML, CSS, Bootstrap, JavaScript and EJS for the front-end and Node.js, Express.js
                        for back-end and SQL as database
                    </ProjectBox>
                    <ProjectBox title="inThoughts" logo="inThoughts.png" gitlink="https://github.com/vanshul02/inThoughts">
                        It is a dear diary application which is supposed to let you write your personal details and store them as memory so that you can keep them to yourselves or you can share it to the whole world anonymously. <br />
                        Currently only front-end is developed in this project using React.js. The backend is planned with Node.js, Express.js and MongoDB.
                    </ProjectBox>
                </div>
            </div>
            <div id="contact" >
                <h1>Hire Me!</h1>
                <div className='contact-details__wrapper'>
                    <div className='left-contact'>
                        <h3>Contact Me</h3>
                        <i class="uil uil-envelope"></i> vanshul.ahuja@gmail.com <br />
                        <i class="uil uil-phone-volume"></i> +91 9649334473 <br />
                    </div>
                    <div className='right-buttons'>
                        <Button inverse href="https://www.linkedin.com/in/vanshulahuja02"><i class="uil uil-linkedin"></i></Button>
                        <Button inverse href="https://www.instagram.com/vanshulahuja_02/"><i class="uil uil-instagram"></i></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioPage
