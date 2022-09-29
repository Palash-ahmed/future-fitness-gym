import React from 'react';
import image from '../../images/Palash.jpg'
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
           <div className='cart-header'>
            <img src={image} alt="" />
           <h3>Palash Ahmed <br /> <small className='location'>Dhaka, Banngladesh</small></h3> 
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
                    <button>20<small>s</small></button>
                    <button>30<small>s</small></button>
                    <button>40<small>s</small></button>
                    <button>50<small>s</small></button>
                    <button>60<small>s</small></button>
                </div>
                    <h2 className='exercise-details'>Exercise Details</h2>
                <div className='exercise-time'>
                    Exercise time:
                </div>
                <div className='break-time'>
                    Break time:
                </div>
                <button className='activity'>Activity Completed</button>
           </div>
        </div>
    );
};

export default Cart;
