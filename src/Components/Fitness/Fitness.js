import React from 'react';
import './Fitness.css'

const Fitness = (props) => {
    const {name, img, paragraph, age, time} = props.fitness;
    
    return (
        <div className='fitness'>
            <img src={img} alt="" />
            <div className='fitness-info'>
                <h2>{name}</h2>
                <p> {paragraph}</p>
                <p>For Age: <span className='age'>{age}Yrs</span></p>
                <p>Time Required: <span className='time'>{time}s</span></p>
            </div>
            <button onClick = {() => props.addToList(props.fitness)} className = 'button-cart'>
                <p className = 'btn-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Fitness;