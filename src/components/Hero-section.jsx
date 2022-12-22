import React from 'react';
import './Hero-section.css';
import { Navbar } from './Navbar';

export const Herosection = () => {
    return (
        <>
            <div className='container-fluid hero'>
                <Navbar/>
                <div className="container text-white">
                    <div className="hero-text container row mt-5 pt-2">
                        <h1 className='col-lg-5 pt-5'>Make Your Home and Office more friendly with
                            <span className='text-success'> Plants</span>.
                        </h1>
                    </div>
                    <p className='col-lg-4 mt-3 ps-2'>Provide your home & office the right plants with our with our experts </p>
                    <div className="container row mb-5 pb-2">
                        <button className="btn-shadow col-lg-3 btn btn-success btn-lg mt-5 px-5 py-4 fw-bolder">Get Your Plants</button>
                        <a href="" className='col-6 ms-3 ps-3 pt-4 mt-5 text-white'><i class="fa-regular fa-circle-play"></i> Guid video to understand about plants</a>
                    </div>
                </div>
                
                    <div className="container bg-white d-flex justify-content-center rounded  align-items-center position-relative hero-footer">
                        <ul className='d-flex align-items-center hero-footer-ul '>
                            <li className='mx-5 py-5 fw-bold h4 text-muted'>CAREER BOOSTING</li>
                            <li className='mx-5 py-5 fw-bold h4 text-muted'>GOOGLE</li>
                            <li className='mx-5 py-5 fw-bold h4 text-muted'>AB SOLUTION</li>
                            <li className='mx-5 py-5 fw-bold h4 text-muted'>REALME</li>
                        </ul>
                    </div>
            </div>
        </>
    ) 
}
