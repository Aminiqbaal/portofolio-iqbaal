import React, { Component, useEffect } from 'react';
import { CiMail, CiLinkedin } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


// const navigate = useNavigate()
const Header = () => {
    useEffect(() => {

    },)
    return <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
        <div className="flex justify-between py-5 items-center">
            <div
                className='text-gradient font-secondary'
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-delay="0">
                <a href='/'>
                    <h4 className='font-normal leading-none font bold'>Sahabat</h4>
                    <h1 className='text-[23px] loeading-none font bold'>Iqbaal</h1>
                </a>
            </div>
            <div
                className="flex items-center space-x-3"
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                data-aos-delay="0">
                {/* <a href='/' target="_blank" className='font-normal leading-none'>
                    Software Development
                </a>
                <a href='/' target="_blank" className='font-normal leading-none'>
                    System Analyst
                </a>
                <a href='/' target="_blank" className='font-normal leading-none'>
                    UI/UX Design
                </a> */}
                {/* <a onClick={() => navigate('/about')} className='font-normal leading-none'>
                    About
                </a> */}
                <a href='https://www.linkedin.com/in/aminiqbaal/' target="_blank">
                    <CiLinkedin />
                </a>
                <a href='mailto:aminiqbaal@outlook.com' target="_blank">
                    <CiMail />
                </a>
                <a href='https://github.com/Aminiqbaal' target="_blank">
                    <BsGithub />
                </a>
            </div>

        </div>
    </div>

}
export default  Header
