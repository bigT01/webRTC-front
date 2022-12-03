import React from 'react';
import CheckBox from '../public/img/check.png'

function OnlyWithAudioCheckBox({setConnectOnlyWithAudio, connectWithOnlyAudio}) {
    const handleConnectionTypeChange = () => {
        setConnectOnlyWithAudio(!connectWithOnlyAudio)
    }

    return ( 
    <div className='checkbox_container'>
        <div className='checkbox_connection' onClick={handleConnectionTypeChange}>
            {connectWithOnlyAudio && (
                <img className='checkbox_image' src={CheckBox}  alt='checkbox_img'/>
            )}
        </div>
        <p className='checkbox_container_paragraph'>Only audio</p>
    </div> 
    );
};


export default OnlyWithAudioCheckBox;