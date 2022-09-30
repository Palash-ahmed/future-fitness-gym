import React from 'react';
import Accordion from '../utilities/Accordion';
import './Questions.css'

const Questions = () => {
    const accordionData = [
        {
            title: 'How does react works?',
            content: `React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces.`
        },
        {
            title: 'Difference between props and state?',
            content: `Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.`
        },
        {
            title: 'What does useEffect do?',
            content: `By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “Effect”), and call it later after performing the DOM updates.`
        }
    ];
    return (
        <div>
            <h1>Answer To The Question</h1>
            <div className='accordion'>
                {accordionData.map(({title, content})=>(
                    <Accordion title = {title} content = {content} />
                ))}
            </div>
        </div>
    );
};

export default Questions;