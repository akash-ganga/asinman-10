import React from 'react';
import './Checkout.css';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const param = useParams();

    return (
        <div className='c-out'>
            <p>This is Checkout of service-{param.id}.</p>
            <p>Id is {param.id}.</p>
        </div>
    );
};

export default Checkout;