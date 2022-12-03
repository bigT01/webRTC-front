import React from "react";

function LeaveRoomButton(props){

    const handleRoomDisconnection = () => {
        const siteURL = window.location.origin;
        window.location.href = siteURL;
    }
    return(
        <div className={'video_button_container'}>
            <button className={'video_button_end'} onClick={handleRoomDisconnection}>
                Leave Room
            </button>
        </div>
    )
}

export default LeaveRoomButton;