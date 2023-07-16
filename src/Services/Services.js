import React from 'react';
import './Services.css';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {

    const services = useLoaderData();

    return (
        <div className='service'>
            <h1 className='s-head'>My Services</h1>
            <div className='services-sec'>
                {
                    services.map(s => <div className='single-service' key={s.id}>
                        <h2>{s.name}</h2>
                        <img src={process.env.PUBLIC_URL + s.img} alt="a skeleton" />
                        <h3>Price: ${s.price}</h3>
                        <p><i><u>Description:</u></i> {s.des}</p>
                        <Link to={`/checkout/${s.id}`}><button>Checkout</button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;