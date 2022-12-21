import React from 'react';
import './Most-selling-products.css'
import Plant1 from '../images/Plant1.jpg';


export const Mostsellingproducts = () => {
    return (
        
        <div className="container">
            <div className='mt-3 pt-3 row'>
                <div className="msp-text col-lg-6">
                    <h1 className='mt-5 pt-5'>Most selling plants</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at asperiores eligendi modi, tempora porro perspiciatis quas cumque expedita facilis earum, hic esse! Itaque distinctio quas odio minima illum sequi?</p>
                    <button className="btn btn-success btn-lg mt-5 px-5 py-3 fw-bolder">Explain More Plants</button>
                </div>
                <div className="col-lg-4 mt-5 pt-5 ms-5 ps-5">
                    <img className='border border-dark border-2' src={Plant1} alt="plant" height={200} width={200} />
                    <img className='border border-dark border-2 ms-5 position-relative card-img2' src={Plant1} alt="plant" height={200} width={200} />
                </div>
            </div>
        </div>
    )
}