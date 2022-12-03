import React, {useState} from "react";
import MicButtonImg from '../../public/img/mic.svg'
import MicButtonOffImg from '../../public/img/micOff.svg'

function MicButton(props){
    const [isMicMuted, setIsMicMuted] = useState(false);

    const HandleMicButtonPressed = () =>{
        setIsMicMuted(!isMicMuted)
    }

    return(
        <div className={'video_button_container'}>
            <img
                src={isMicMuted ? MicButtonOffImg : MicButtonImg}
                onClick={HandleMicButtonPressed}
                className={'video_button_image'} alt={'tt'}/>
        </div>
    )
}

export default MicButton;