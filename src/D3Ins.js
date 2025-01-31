import React, { useState } from 'react'; 

const D3Ins = ({ setCurrentPage }) => {
    const [isQGISChecked, setIsQGISChecked] = useState(false); 
    const [isD3Checked, setIsD3Checked] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleQGISRedirect = () => {
        
        if (!isQGISChecked) {
            setErrorMessage('You must confirm that you have finished with the D3-React map before going to the questionnaire.');    
        } else {
          
            window.open("https://forms.gle/wp8QvF9GjcmagdoN7", "_blank");
        }
    };

    const handleFinish = () => {
     
        if (!isD3Checked) {
            setErrorMessage('You must confirm that you have submitted the D3-React questionnaire before finishing this experiment.');    
        } else {
            setErrorMessage(''); 
            setCurrentPage('final');
        }
    };

    return (
        <div className="d3ins">
            <h3>How to Operate</h3>
            <ul>
                <li>If you find that these texts are covering the map, please zoom out (Ctrl/Command -) in your browser.</li>
                <li>The hexbin map needs time to render the hexagonal shapes, especially if you are working with "All" participants.</li>
                <li>The displayed data on the hexbin map is based on the highlighted area marked on the histogram.</li>
                <li>Move the "brush" element (blue square) on the histogram to display and change the data in the hexbin map. You can adjust the brush function by sliding it left or right and resizing it by clicking and dragging on the edge, in or out.</li>
                <li>With the brush feature, you can select data based on specific days or for the entire week.</li>
                <li>In the Filters, you can choose your preferred data that you intend to display on the histogram and hexbin map. Adjust the hexagonal size using the “Hexbin size” filter.</li>
                <li>Point your mouse at a specific hexagonal shape on the map to find out its mean value and the number of data points contained within it.</li>
                <li>You have no time limit to explore this map. Enjoy your wandering time before deciding to proceed to the D3-React Questionnaire, after which you will be allowed to finish this experiment.</li>
            </ul>
            

       
            <div style={{ margin: '10px', marginTop: '20px' }}>
             
                <div>
                    <input
                        type="checkbox"
                        checked={isQGISChecked}
                        onChange={() => {
                            setIsQGISChecked(!isQGISChecked);
                            setErrorMessage(''); 
                        }}
                    />
                    <label style={{ marginLeft: '5px' }}>
                        I have finished with the map and ready to fill in the questionnaire.
                    </label>
                </div>

                <button
                    onClick={handleQGISRedirect} 
                    className="d3-que"
                    style={{ marginLeft: '0px', padding: '10px 20px' }} 
                >
                    Go to D3-React Questionnaire
                </button>
                <br></br>
                <br></br>
                
                <div>
                    <input
                        type="checkbox"
                        checked={isD3Checked}
                        onChange={() => {
                            setIsD3Checked(!isD3Checked);
                            setErrorMessage('');
                        }}
                    />
                    <label style={{ marginLeft: '5px', marginTop: '10px' }}>
                        I have submitted the D3-React questionnaire in the Google Form.
                    </label>
                </div>

                <button
                    onClick={handleFinish}
                    className="backd3"
                    style={{ marginLeft: '0px', padding: '10px 20px' }} 
                >
                    Finish
                </button>

                {errorMessage && (
                    <div style={{ color: 'red', marginTop: '10px' }}>
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default D3Ins;