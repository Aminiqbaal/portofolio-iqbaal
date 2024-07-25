import React, { Component } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='section container mx-auto max-w-[1200px] px-3 items-center'>
            <div className='w-full'>
                <div className='block text-center font-secondary font-black text-[20px]'>
                    Hello I'm
                    <div className='text-gradient font-secondary ml-3 text-[23px]'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'IT System/Business Analyst',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Software Engineer',
                                1000,
                                'UI/UX Deisgner',
                                1000,
                                'QA Automation Engineer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
                <div className='max-w-[750px] text-center mx-auto mt-5 '>
                    My Name is Muhammad Amin Iqbaal Alam, S.Kom graduate Bachelor Degree of Informatics Engineering Brawijaya University. I have experience in developing software.
                </div>
            </div>

        </div>
    )
}
export default Banner
