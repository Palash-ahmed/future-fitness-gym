import React from 'react';
import image from '../../images/Palash.jpg'
import './Cart.css'

const Cart = () => {
    return (
        <div>
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
           <h2>Add A Break</h2>
           <div className='add-break'>
                <div>
                    <button>20<small>s</small></button>
                    <button>30<small>s</small></button>
                    <button>40<small>s</small></button>
                    <button>50<small>s</small></button>
                    <button>60<small>s</small></button>
                </div>
           </div>
        </div>
    );
};

export default Cart;
