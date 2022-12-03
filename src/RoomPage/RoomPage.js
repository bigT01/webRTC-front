import React, {useEffect} from 'react';
import Participants from "./ParticipantsSection/Participants";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import RoomLable from "./RoomLable";
import {connect} from "react-redux";
import * as webRTCHandler from '../utils/webRTCHandler'
import Overlay from "./Overlay";
import './RoomPage.css'



function RoomPage({ roomId, identity, isRoomHost, showOverlay}) {
    useEffect(() =>{
        webRTCHandler.getLocalPreviewAndInitRoomConnection(
            isRoomHost,
            identity,
            roomId,
        );
    },[])

  return (
    <div className={'room_container'}>
        <Participants />
        <VideoSection />
        <ChatSection />
        <RoomLable roomId={roomId}/>
        {showOverlay &&<Overlay/>}
    </div>
  );
}

const mapStoreStateToProps = (state) => {
    return {
        ...state,

    }
}

export default connect(mapStoreStateToProps)(RoomPage);
