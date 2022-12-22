import React from 'react';
import './Review-section.css';
import Review1 from '../images/Review1.jpg';
import Review2 from '../images/Review2.jpg';
import Review3 from '../images/Review3.jpg';

export const Reviewsection = () => {
    return (
        <div className='container mt-5 pt-5 pb-5'>

            <h1 className='fw-bolder '>Reviews From Customers</h1>
            <hr />

            <div className="row">
                <div className="col-lg-6 pt-5">
                    <img  className='border border-dark border-1 review-img' src={Review1} alt="" width={560} height={300} />
                </div>

                <div className="col-lg-6 pt-5">
                    <img className='border border-dark border-1 review-img' src={Review2} alt="" width={420}  height={145}/>
                    <img className='mt-2 border border-dark border-1 review-img' src={Review3} alt="" width={420} height={145}/>    
                </div>

            </div>






        </div>


        



    )
}
