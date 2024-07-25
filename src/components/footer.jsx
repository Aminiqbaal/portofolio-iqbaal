import React, { Component } from 'react';
const Footer = () => {
    return (
        <div bgColor='black' className='text-center text-lg-left'>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a 
                className='text-secondary' 
                // href='/'
                >
                    Sahabat Iqbaal
                </a>
            </div>
        </div>
    )
}
export default Footer
