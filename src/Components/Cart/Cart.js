import React, { useState } from 'react';
import image from '../../images/Palash.jpg'
import {addToDataBase} from '../utilities/Fakedb'
import './Cart.css'

const Cart = (props) => {
    let totalTime = 0;
    const cartArray =props.cart;
    cartArray.map(data=> console.log(data.time));
        for (const list of props.cart){
            totalTime = parseFloat(totalTime) + parseFloat(list.time)
            console.log(list.time);
            
        }

    const setSecond = localStorage.getItem('id');
    const [seconds, setSeconds] = useState ([setSecond]);

    const tenSecond = () => {
        setSeconds(10);
        addToDataBase (10);
    }
        
    const twentySecond = () => {
        setSeconds(20);
        addToDataBase(20);
    }

    const thirtySecond = () => {
        setSeconds(30);
        addToDataBase(30);
    }

    const fortySecond = () => {
        setSeconds(40);
        addToDataBase(40);
    }
    const fiftySecond = () => {
        setSeconds(50);
        addToDataBase(50)
    }
    const sixtySecond = () => {
        setSeconds(60);
        addToDataBase(60)
    }
    return (
        <div className='cart'>
           <div className='cart-header'>
            <img src={image} alt="" />
           <h3>Palash Ahmed <br /> <small className='location'>Dhaka, Bangladesh</small></h3> 
           </div>
            <div className='myself'>
                <div id='weight'>
                    <h2>65<small>kg</small></h2>
                    <p>Weight</p>
                </div>
                <div id='height'>
                    <h2>5.6</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>26<small>yrs</small></h2>
                    <p>Age</p>
                </div>
           </div>
           <div>
                <h2 className='break'>Add A Break</h2>
                <div className='add-break'>
                    <button onClick = {tenSecond}>10<small>s</small></button>
                    <button onClick = {twentySecond}>20<small>s</small></button>
                    <button onClick = {thirtySecond}>30<small>s</small></button>
                    <button onClick = {fortySecond}>40<small>s</small></button>
                    <button onClick = {fiftySecond}>50<small>s</small></button>
                    <button onClick = {sixtySecond}>60<small>s</small></button>
                </div>
                    <h2 className='exercise-details'>Exercise Details</h2>
                <div className='exercise-time'>
                   <p> Exercise time: {totalTime} seconds</p>
                </div>
                <div className='break-time'>
                    <p>Break time: {seconds} seconds</p>
                </div>
                <button className='activity'>Activity Completed</button>
           </div>
        </div>
    );
};

export default Cart;
