import React, { useState } from 'react';

const Instructions = ({ onQGIS }) => {
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
        <div className="instructions-container">
            <h1 className="instructions-title">Instruction</h1>
            <p className="instructions-description">
            The data visualization is using the Travel Experience in Public Transport Dataset (https://osf.io/rgkvq/), conducted by Bosch (2024).
            The dataset were collected the comprehensive travel data from 44 participants who navigated a 15 km route using various modes of transportation: tram, bus, and train. 
            During travelling, the GPS location and heart rate of the participants were capturing in every second by an electrocardiogram (ECG) belt. 
            On the other hand, the stress level, journey satisfaction, and emotional responses were measured by the questionnares in every 3.5 minutes using an equipped mobile phone.
            </p>

            <p className="instructions-description">
            The static and interactive maps were created and developed by Quantum Geographic Information System (QGIS) software and D3.js with React respectively.
            The static map contains of 4 images which are depict: heart rate variability (HRV), heart rate median absolute deviation (HR_mad), stress level, and journey satisfaction values.
            The interactive map contains of a histogram and a map. You can adjust in "Y-Value Filter" to decided either HRV, HR_mad, stress level, or journey satisfation.
            The details of the instruction of the each map can be found in the respective page.
            </p>
            <p className="instructions-description">
           
            The hexbin map itself, captured the mean values of the data points that contains inside of the hexbin area. 
            Therefore, by this appraoch, overlapping visualization of the data points within colosed area on the map can be avoided.
            
            </p>
            <p className="instructions-description">
            First, you will explore the QGIS map and then the D3-React map. You need to gain as much information as you can. 
            There is no limited time for this experiment, and you can make your notes. Once you finish with the first map, click the questionnaire button to fill in the first questionnaire, and submit it.
            This also aplies to the second map before you click the 'finish' button to end this experiment. 
            After completing both of the questionnaires, then you are allowed to click the "Finish" button to end the experiment.
            </p>

            <p className="instructions-description">
                Here are the informations that you need to find out on the maps:
                <ul>
                    <li>The HRV scores when people were commuting with bus and train between Braunscherig Hbf. and Wolfenbüttel bahnhof.</li>
                    <li>The stress level scores in around Braunscherig Hbf. and Wolfenbüttel bahnhof.</li>
                    <li>The satisfaction scores when people were using train or bus during travelling between Braunscherig Hbf. and Wolfenbüttel bahnhof.</li>
                    <li>The HR_mad at around Braunschweig Hbf. and Wolfenbüttel bahnhof.</li>
                </ul>
            </p>
            <p className="instructions-description">
            However, since the notion of this experiment is to evaluate the data visualization, you can also find another information which are capturing on the maps.
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
            <button onClick={handleClick} className="instructions-button">
                Go to QGIS Map           
            </button>
        </div>
    );
};

export default Instructions;