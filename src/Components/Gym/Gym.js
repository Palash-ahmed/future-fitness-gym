import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Fitness from '../Fitness/Fitness';
import './Gym.css'

const Gym = () => {
    const [fitnesses, setFitnesses] = useState([]);

    useEffect( () => {
        fetch('Fitness.json')
        .then(res => res.json())
        .then(data => setFitnesses(data))
    },[]);


    const [cart, setCart] = useState([]);
    const addToList = gym =>{
        const newCart = [...cart, gym];
        setCart(newCart);
    }

    return (
        <div className='fit-container'>
            <div className='fittest-container'>
             {
                fitnesses.map(fitness => <Fitness
                key = {fitness.id}
                fitness = {fitness}
                addToList = {addToList}
                ></Fitness>)
             }


            </div>
            <div className = "cart-container">
                <Cart 
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Gym;