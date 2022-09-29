import React from 'react';
import './Fitness.css'

const Fitness = (props) => {
    const {name, img, paragraph, forAge, timeRequired} = props.fitness;
    
    return (
        <div className='fitness'>
            <img src={img} alt="" />
            <div className='fitness-info'>
                <p className='fitness-name'>{name}</p>
                <p> {paragraph}</p>
                <p>For Age: <span className='age'>{forAge}</span></p>
                <p>Time Required: <span className='time'>{timeRequired}s</span></p>
            </div>
            <button onClick = {() => props.handleAddToCart(props.product)} className = 'button-cart'>
                <p className = 'btn-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Fitness;