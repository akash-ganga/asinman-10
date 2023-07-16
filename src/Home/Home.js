import React from 'react';
import k from '../images/k.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <img src={k} alt="this is me, a kongkal" />
            <div className='h-d-sec'>
                <h1>Hi, this is me.</h1>
                <h3>I am a skeleton.</h3>
                <h3>I have services and I provide services.</h3>
                <p>A skeleton is the structural frame that supports the body of most animals. There are several types of skeletons, including the exoskeleton, which is the stable outer shell of an organism, the endoskeleton, which forms the support structure inside the body, and the hydroskeleton, a flexible internal skeleton supported by fluid pressure. Vertebrates are animals with a vertebral column, and their skeletons are typically composed of bone and cartilage. Invertebrates are animals that lack a vertebral column. The skeletons of invertebrates vary, including hard exoskeleton shells, plated endoskeletons, or spicules. Cartilage is a rigid connective tissue that is found in the skeletal systems of vertebrates and invertebrates.</p>
            </div>
        </div>
    );
};

export default Home;