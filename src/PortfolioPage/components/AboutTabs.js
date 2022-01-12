import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './AboutTabs.css';
const AboutTabs = () => {
    return (

        <Tabs>
            <TabList>
                <Tab>Main Skills</Tab>
                <Tab>Education and Certification</Tab>
            </TabList>

            <TabPanel>
                <div className="skill">
                    <div className="skill-title">Front-End Development -<span> React.JS</span></div>
                    <p>Designing the Website</p>

                    <div className="skill-title">Back-End Development -<span> Node.JS, Express.JS, MySQL</span></div>
                    <p>Creating APIs and storing data on server</p>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="ed-cert">
                    <div className="ed-cert-title">Bachelors in Technology -<span> PDPM Indian Institute of Information Technology (IIIT) Jabalpur</span></div>
                    <p>Nov 2020 - July 2024</p>
                    <div className="ed-cert-title">Certificate of Excellence for Data Structures in C++  -<span> Coding Ninjas</span></div>
                    <p>Dec 2021 &emsp; <a href="http://files.codingninjas.in/certificate17731074a5f8b0812e35d7b9d655b24e612f458.pdf"> Certificate Link </a> </p>
                </div>
            </TabPanel>
        </Tabs>
    );
}

export default AboutTabs

