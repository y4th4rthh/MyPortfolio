import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText((prevText) => prevText + name[ref.current - 1]);
            }
        }, 500);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <div className='area relative z-0 bg-white w-screen h-screen' style={{backgroundColor:'white'}}>
            <ul className="circles my-auto" style={{ backgroundColor: '#ffffff' }}>
                <li style={{ backgroundColor: '#dbeafe' }}></li>
                <li style={{ backgroundColor: '#bfdbfe' }}></li>
                <li style={{ backgroundColor: '#dbeafe' }}></li>
                <li style={{ backgroundColor: '#dbeafe' }}></li>
                <li style={{ backgroundColor: '#bfdbfe' }}></li>
                <li style={{ backgroundColor: '#dbeafe' }}></li>
                <li style={{ backgroundColor: '#dbeafe' }}></li>
                <li style={{ backgroundColor: '#bfdbfe' }}></li>
                <li style={{ backgroundColor: '#dbeafe' }}></li>
                <li style={{ backgroundColor: '#dbeafe' }}></li>
            </ul>
            <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-black' id='hero'>
                <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl bg-opacity-70 bg-white'>
                    <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
                        Hi, I'm&nbsp;<span className='text-blue-500 font-extrabold'>{text}</span>
                    </h1>
                    <p className='mt-3 text-xl'>
                        I love to learn and build scalable and optimized backend systems.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
