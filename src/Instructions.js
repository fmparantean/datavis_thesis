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
            <h1 className="instructions-title">Instructions</h1>
            <p className="instructions-description">
            The data visualization uses the Travel Experience in Public Transport Dataset (https://osf.io/rgkvq/), conducted by Bosch (2024).
            The dataset was collected from 44 participants who navigated a 15 km route using various modes of transportation: tram, bus, and train.
            During travel, the participants' GPS location and heart rate were captured every second by an electrocardiogram (ECG) belt.
            Additionally, the stress level, journey satisfaction, and emotional responses were measured via questionnaires every 3.5 minutes using an equipped mobile phone.
            </p>

            <p className="instructions-description">
            The static and interactive maps were created using Quantum Geographic Information System (QGIS) software and D3.js with React, respectively.
            The static map contains four images depicting heart rate variability (HRV), heart rate median absolute deviation (HR_mad), stress level, and journey satisfaction values.
            The interactive map consists of a histogram and a map.
            You can adjust the "Y-Value Filter" to select either HRV, HR_mad, stress level, or journey satisfaction.
            Details of the instructions for each map can be found on their respective pages.
            </p>
            <p className="instructions-description">
           
            The hexbin map represents the mean values of the data points contained within the hexagonal areas.

            This approach helps to avoid overlapping visualizations of data points within a closed area on the map. 
            
            </p>
            <p className="instructions-description">
            First, you will explore the QGIS map and then the D3-React map.
            Once you finish with the first map, click the questionnaire button to fill in the first questionnaire and submit it.
            is also applies to the second map before you click the 'finish' button.
            After completing both questionnaires, you will be allowed to click the "Finish" button to end the experiment.
            You should gather as much information as possible.
            There is no time limit for this experiment, and you should take notes.
            </p>

            <p className="instructions-description">
            Here is the information that you need to find on the maps:
                <ul>
                    <li>The HRV scores when people were commuting by bus and train between Braunschweig Hbf. and Wolfenbüttel Bahnhof.</li>
                    <li>The stress level scores around Braunschweig Hbf. and Wolfenbüttel Bahnhof.</li>
                    <li>The satisfaction scores when people were using the train or bus while traveling between Braunschweig Hbf. and Wolfenbüttel Bahnhof.</li>
                    <li>The HR_mad scores around Braunschweig Hbf. and Wolfenbüttel Bahnhof.</li>
                </ul>
            </p>
            <p className="instructions-description">
            However, since the goal of this experiment is to evaluate the data visualization, you can also find additional information captured on the maps.
            </p>


            <div>
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                />
                <label>I acknowledge that I have read and fully understand the above information. </label>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button onClick={handleClick} className="instructions-button">
                Go to QGIS Map           
            </button>
        </div>
    );
};

export default Instructions;