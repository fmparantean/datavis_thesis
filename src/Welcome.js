import React, { useState } from 'react';

const Welcome = ({ onQGIS }) => {
    const [isChecked, setIsChecked] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); 
        setErrorMessage(''); 
    };

    const handleClick = () => {
        if (!isChecked) {
            setErrorMessage('You must confirm that you have read and understand the instruction before proceeding.');
        } else {
            onQGIS(); 
        }
    };

    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Instruction</h1>
            <p className="welcome-description">
            The data visualization is using the Travel Experience in Public Transport Dataset (https://osf.io/rgkvq/). 
            The static and interactive maps were created and developed by Quantum Geographic Information System (QGIS) software and D3.js with React respectively.
            The static map contains of 4 images which are depict: heart rate variability (HRV), heart rate median absolute deviation (HR_mad), stress level, and journey satisfaction values.
            The interactive map contains of a histogram and a map. You can adjust in "Y-Value Filter" to decided either HRV, HR_mad, stress level, or journey satisfation.
            The details of the instruction of the each map can be found in the respective page.

            </p>
            <p className="welcome-description">
            First, you will explore the QGIS map and then the D3-React map. You need to gain as much information as you can. 
            There is no limited time for this experiment, and you can make your notes. Once you finish with the map, click the questionnaire button, fill in the form, and submit it. 
            After completing the two questionnaires, then you can click the "Finish" button to end the experiment.

            </p>
            <p className="welcome-description">
                Here is the step of this experiment:
                <ul>
                    <li>Explore the static map (QGIS)</li>
                    <li>Fill in the first questionnaire</li>
                    <li>Explore the interactive map (D3-React)</li>
                    <li>Fill in the second questionnaire</li>
                </ul>
            </p>
            <div>
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                />
                <label>I declare that I have read and understand the instructions</label>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button onClick={handleClick} className="welcome-button">
                Go to QGIS Map           
            </button>
        </div>
    );
};

export default Welcome;