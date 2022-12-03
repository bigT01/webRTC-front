import React, {useState} from "react";
import SwitchImg from "../../public/img/switchToScreenSharing.svg"

function SwitchToScreenShareButton(props){
    const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

    const handleScreenShareToggle = () =>{
        setIsScreenSharingActive(!isScreenSharingActive)
    }

    return(
        <div className={'video_button_container'}>
            <img src={SwitchImg} alt="SwitchImg" className={"video_button_image"}/>
        </div>
    )
}

export default SwitchToScreenShareButton;