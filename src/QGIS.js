import React, { useState } from 'react';

const QGIS = ({ onBack }) => {
    const [isQGISChecked, setIsQGISChecked] = useState(false);
    const [isD3Checked, setIsD3Checked] = useState(false); 
    const [errorQGISMessage, setErrorQGISMessage] = useState(''); 
    const [errorD3Message, setErrorD3Message] = useState(''); 

    const handleQGISCheckboxChange = () => {
        setIsQGISChecked(!isQGISChecked); 
        setErrorQGISMessage(''); 
    };

    const handleD3CheckboxChange = () => {
        setIsD3Checked(!isD3Checked); 
        setErrorD3Message(''); 
    };

    const handleQGISRedirect = () => {
        if (!isQGISChecked) {
            setErrorQGISMessage('Please confirm that you have finished with the map and are ready to fill in the questionnaire before proceeding.'); 
        } else {
            window.open("https://forms.gle/hNiaZBJKq7en76wB7", "_blank"); 
        }
    };

    const handleD3Redirect = () => {
        if (!isD3Checked) {
            setErrorD3Message('Please confirm that you have submitted the QGIS questionnaire before proceeding to the D3-React App.'); 
        } else {
            onBack();
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>The static Map of Travel Experience with QGIS Map</h1>
                <p>Here is the data visualization: HRV, HR_mad, Stress Level, and Journey Satisfaction. </p>
                <p>Take some notes and ENJOY your time before deciding to Go to QGIS Questionnaire!</p>
           
                <img src="hrv.png" alt="QGIS Example 1" style={{ width: '450px', margin: '5px' }} />
                <img src="HR_mad.png" alt="QGIS Example 2" style={{ width: '450px', margin: '5px' }} />
                <img src="stress.png" alt="QGIS Example 3" style={{ width: '450px', margin: '5px' }} />
                <img src="satisfaction.png" alt="QGIS Example 4" style={{ width: '450px', margin: '5px' }} />
             
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5px', marginBottom: '100px' }}> 
                <div style={{ textAlign: 'center' }}>
                 
                    <div style={{ marginBottom: '5px' }}>
                        <input
                            type="checkbox"
                            checked={isQGISChecked}
                            onChange={handleQGISCheckboxChange}
                        />
                        <label style={{ marginLeft: '5px' }}>
                            I have finished with the map and ready to fill in the questionnaire
                        </label>
                        {errorQGISMessage && <p style={{ color: 'red' }}>{errorQGISMessage}</p>}
                    </div>

                    <button
                        onClick={handleQGISRedirect}
                        className="qgis-que"
                        style={{ margin: '5px', padding: '10px 20px' }}
                    >
                        Go to QGIS Questionnaire
                    </button>
                </div>

                <div style={{ textAlign: 'center' }}>
                  
                    <div style={{ marginBottom: '5px' }}>
                        <input
                            type="checkbox"
                            checked={isD3Checked}
                            onChange={handleD3CheckboxChange}
                        />
                        <label style={{ marginLeft: '5px' }}>
                            I have submitted the QGIS questionnaire
                        </label>
                        {errorD3Message && <p style={{ color: 'red' }}>{errorD3Message}</p>} 
                    </div>

                    <button
                        onClick={handleD3Redirect} 
                        className="qgis-back"
                        style={{ margin: '5px', padding: '10px 20px' }} 
                    >
                        Go to D3-React App
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QGIS;