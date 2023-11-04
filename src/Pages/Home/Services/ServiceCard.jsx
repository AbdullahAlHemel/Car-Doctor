import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id ,title, img , price} = service;
    return (
     <div className="card w-96 bg-base-100 shadow-lg border">
        <figure className="px-4 pt-4">
            <img src={img} alt="Shoes" className="rounded-xl m-auto" />
        </figure>
        <div className="card-body">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <h2 className='text-2xl font-bold text-[#ff5200]'> $ Price: {price}</h2>
            <div className='card-actions'>
                <Link to={`/checkout/${_id}`}>
                   <button className='btn '>Book Now</button>
                </Link>
            </div>
        </div>
     </div>
    );
};

export default ServiceCard;