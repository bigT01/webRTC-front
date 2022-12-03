import React from "react";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import SwitchToScreenShareButton from "./SwitchToScreenShareButton";

function VideoButtons(props){
    return(
        <div className={'video_buttons_container'}>
            <MicButton />
            <CameraButton />
            <LeaveRoomButton />
            <SwitchToScreenShareButton />
        </div>
    )
}

export default VideoButtons;