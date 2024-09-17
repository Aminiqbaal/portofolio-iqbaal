import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaLaptopCode, FaHouseUser } from "react-icons/fa";




const Experience = () => {
    return (
        <div className='container mx-auto max-w-[1200px] p-3 overflow-hidden'>
            <div className="justify-between py-5 items-center">
                <div className='font-secondary text-center font-bold mb-12'>
                    <h4 className='text-secondary mb-3 text-[50px]'>Work Experience</h4>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-start justify-between'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="December 2023 - Jun 2024"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaptopCode />}
                    >
                        <h3 className="vertical-timeline-element-title">System Analyst</h3>
                        <h4 className="vertical-timeline-element-subtitle">PT. Akomedia Asia</h4>
                        <p>
                            Analysist Business Requirement, Technical requirement use Brainstorming, Grooming,
                            Documentation SRS, NFT, Pentest, Domain Driven Design, API Contract, Use Case, Sequence Diagram
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="January 2023 - December 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaptopCode />}
                    >
                        <h3 className="vertical-timeline-element-title">ICT Engineer - System/Business Analyst</h3>
                        <h4 className="vertical-timeline-element-subtitle">PT. Garuda Maintenance Facility (GMF) Aero Asia</h4>
                        <p>
                            Documentation and Analyst (Blueprint, Business Requirement, User Acceptance Test, & Business Case),
                            UI/UX Designer
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="October 2022 - December 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaptopCode />}
                    >
                        <h3 className="vertical-timeline-element-title">System Analyst, System Support & Front End Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">RSUD. Dr. Soetomo Jawa Timur</h4>
                        <p>
                            Documentation, Implementation Code, UI/UX Designer and analysis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="February 2022 - August 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaptopCode />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">PT. Patigeni Mitra Sejati</h4>
                        <p>
                            Implementation code for development website and mobile, and discuss business requirement
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="11 January 2022"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaGraduationCap />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Computer Science in Brawijaya University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                            Informatics Engineering
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="July 2019 - January 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaptopCode />}
                    >
                        <h3 className="vertical-timeline-element-title">System Analyst & Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">CV. Pastiijadi Digital Solutions</h4>
                        <p>
                            Documentation,  UI/UX Designer, analysis and testing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="April 2019 - July 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaptopCode />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer Internship</h3>
                        <h4 className="vertical-timeline-element-subtitle">PT. Avemedia Nusantara</h4>
                        <p>
                            Implementation code for development website and mobile, and discuss business requirement
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaHouseUser />}
                    />
                </VerticalTimeline>

            </div>
        </div>
    )
}
export default Experience
