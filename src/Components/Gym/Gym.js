import React, { useEffect, useState } from 'react';
import Fitness from '../Fitness/Fitness';
import './Gym.css'

const Gym = () => {
    const [fitnesses, setFitnesses] = useState([]);

    useEffect( () => {
        fetch('Fitness.json')
        .then(res => res.json())
        .then(data => setFitnesses(data))
    },[]);


    return (
        <div className='fit-container'>
            <div className='fitest-container'>
             {
                fitnesses.map(fitness => <Fitness
                key = {fitness.id}
                fitness = {fitness}
                ></Fitness>)
             }
            </div>
            <div>
                <p>Palash Ahmed</p>
            </div>
        </div>
    );
};

export default Gym;