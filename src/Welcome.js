import React, { useState } from 'react';

const Welcome = ({ onStart }) => {
    const [checkedState, setCheckedState] = useState(new Array(5).fill(false)); 
    const [errorMessage, setErrorMessage] = useState('');

    const handleCheckboxChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
        setErrorMessage(''); 
    };

    const handleStart = () => {
        if (checkedState.some(item => !item)) {
            setErrorMessage('You must tick all the declarations to be eligible for this experiment.');
        } else {
            setErrorMessage('');
            onStart();
        }
    };

    return (
        <div className="welcome-container">
            <h1>Welcome to the Data Visualization Experiment</h1>
            <h3>My name is Febryeric M. Parantean, and I am a master's student in the Cognitive Science program at Osnabrück University.</h3>
            <h3>This experiment is part of my master's thesis under the supervision of: </h3>
                <h5>Prof. Dr. phil. Kai-Uwe Kühnberger (Osnabrück University) </h5>
                <h5>Dr. Esther Bosch (German Aerospace Center/ DLR)</h5>
            <h4>You are going to evaluate the "hexagonal bin (hexbin)" data visualization between the static and the interactive map.</h4>
            <h4>You need to use a mouse and a recommended screen monitor minimum of 19 inches. </h4>
    
            <p className="checkboxes">
                <h2>As a participant, I declare that ...</h2>
            </p>
            <div className="checkboxes">
                <label>
                    <input
                        type="checkbox"
                        checked={checkedState[0]}
                        onChange={() => handleCheckboxChange(0)}
                    />
                    I am 18 years old and older
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checkedState[1]}
                        onChange={() => handleCheckboxChange(1)}
                    />
                    I have no color blindness
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checkedState[2]}
                        onChange={() => handleCheckboxChange(2)}
                    />
                    I am not suffering from Trypophobia or fear of hexagonal shapes
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checkedState[3]}
                        onChange={() => handleCheckboxChange(3)}
                    />
                    I agree to do this experiment
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={checkedState[4]}
                        onChange={() => handleCheckboxChange(4)}
                    />
                    I am allowed to stop this experiment anytime
                </label>
            </div>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <button onClick={handleStart} className="instructions-button">
                START
            </button>
        </div>
    );
};

export default Welcome;