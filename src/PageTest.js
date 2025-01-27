import React, { useState } from 'react';

const PageTest = ({ onNext }) => {
    const [isChecked, setIsChecked] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleNext = () => {
        if (!isChecked) {
            setErrorMessage('You must confirm that your screen displays 4 rectangles in a row before proceeding.'); 
        } else {
            setErrorMessage(''); 
            onNext(); 
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>This is the Adjustment Screen Page Test</h1>
        
            <p className="pagetest">
                <ul>
                    <li>Your screen should display 4 BLACK PARALLEL RECTANGLES in a ROW.</li>
                    <li>If not, adjust your browser's zoom (Windows/Linux: Control +/-)(Mac: Command +/-) to reach the minimum margin on the right and left sides of the screen.</li>
                    <li>ZOOM IN (+) if you see a big gap/space in your screen's left and right margin (mostly with big monitoros that are more than 27 Inches).</li>
                    <li>ZOOM OUT (-) if you only see 2 or 3 rectangles until you see 4 rectangles in a row, and you do not see the "next" button without scrolling down (mostly with small monitoros that are less than 27 Inches).</li>
                    <li>Click Next after adjustment!</li>
                </ul>
            </p>
            
          
            <img src="box.png" alt="Example 1" style={{ width: '450px', margin: '5px' }} />
            <img src="box.png" alt="Example 2" style={{ width: '450px', margin: '5px' }} />
            <img src="box.png" alt="Example 3" style={{ width: '450px', margin: '5px' }} />
            <img src="box.png" alt="Example 4" style={{ width: '450px', margin: '5px' }} />
        
            <br />

            <div style={{ margin: '20px' }}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                        setIsChecked(!isChecked);
                        setErrorMessage('');
                    }}
                />
                <label style={{ marginLeft: '5px' }}>
                    My screen shows 4 rectangles in a row with an optimal size above this text.
                </label>
            </div>


            {errorMessage && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {errorMessage}
                </div>
            )}

            <button
                onClick={handleNext}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
                className="instructions-button"
            >
                Next
            </button>
        </div>
    );
};

export default PageTest;