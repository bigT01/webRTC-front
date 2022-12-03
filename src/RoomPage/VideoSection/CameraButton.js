import React, {useState} from "react";
import CameraButtonImg from "../../public/img/camera.svg";
import CameraButtonOffImg from "../../public/img/cameraOff.svg";


function CameraButton(props){
    const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

    const handleCameraButtonPressed = () => {
        setIsLocalVideoDisabled(!isLocalVideoDisabled)
    }

    return(
        <div className={'video_button_container'}>
            <img
                src={isLocalVideoDisabled ? CameraButtonOffImg : CameraButtonImg}
                alt="tt"
                className={"video_button_image"}
                onClick={handleCameraButtonPressed}/>
        </div>
    )
}

export default CameraButton;