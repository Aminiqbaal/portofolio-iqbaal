import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Profile = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='container mx-auto max-w-[1200px] p-3 overflow-hidden'>
            <div className='text-center mb-12'>
                <h4 className='font-secondary font-bold text-secondary mb-3 text-[50px]'>Awesome Skills</h4>
                <div className='max-w-[750px] text-center mx-auto mt-5'>
                    Having knowledge of enterprise business systems such as ERP (Enterprise Resource Planning) like SAP, government services, telecommunication services, e-commerce, company profile, state-owned enterprise services, hospital management information system (SIMRS) dan Electronic Medical Records. I am a well-organized person and detail oriented. especially web based and mobile based. I am a disciplined person, can work in a team or individually and adapt to the environment.
                </div>
            </div>

            <Carousel responsive={responsive}>
                {/* Slide 1 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/2.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    HTML, CSS, JS
                                </h4>
                            </div>
                            <p>
                                Basics of coding for web design.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/1.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    CodeIgniter
                                </h4>
                            </div>
                            <p>
                                Open-source software rapid development web framework.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/3.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    Laravel
                                </h4>
                            </div>
                            <p>
                                Open-source PHP-based web framework for building web applications.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 4 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/4.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-[80%] max-w-[400px] h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    ReactJS
                                </h4>
                            </div>
                            <p>
                                Front-end JavaScript library for building user interfaces based on components.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 5 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/5.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-[80%] max-w-[400px] h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    VueJS
                                </h4>
                            </div>
                            <p>
                                Front end JavaScript framework for building UI and single page apps.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 6 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/6.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-[80%] max-w-[400px] h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    Flutter
                                </h4>
                            </div>
                            <p>
                                Open-source UI software development kit created by Google.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 7 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/7.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-[80%] max-w-[400px] h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    SAP
                                </h4>
                            </div>
                            <p>
                                Develops enterprise software to manage business operations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 8 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/8.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-[80%] max-w-[400px] h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    JavaAndroid
                                </h4>
                            </div>
                            <p>
                                Official integrated development environment for Google's Android OS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 9 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/9.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-[80%] max-w-[400px] h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    PostgreSQL
                                </h4>
                            </div>
                            <p>
                                Open-source relational database management system.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Slide 10 */}
                <div className='bg-transparent h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 group'>
                    <img src='/images/10.png' alt='' style={{ width: '40%', height: 'auto', objectFit: 'contain' }} />
                    <div className='absolute p-3 backdrop-blur-xl bg-primary w-[80%] max-w-[400px] h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linier'>
                        <div className='text-center w-full text-white'>
                            <div className='bg-white rounded-full px-4 py-1 inline-block mb-2'>
                                <h4 className='text-gradient'>
                                    MySQL
                                </h4>
                            </div>
                            <p>
                                Open-source relational database management system.
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Profile;
