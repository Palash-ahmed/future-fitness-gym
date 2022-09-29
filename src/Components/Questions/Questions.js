import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question-container'>
            <div>
                <h4>How does react works?</h4>
                <strong>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces </strong>
            </div>

            <div>
            <h4>Difference between props and state?</h4>
                <strong>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </strong>

            </div>

            <div>
            <h4>what does useeffect do?</h4>
                <strong>Ans: By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. </strong>
            </div>
            
        </div>
    );
};

export default Questions;