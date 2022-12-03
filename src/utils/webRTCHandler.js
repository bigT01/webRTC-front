import store from '../store/store'
import {setShowOverlay} from "../store/action";
import * as wss from './wss'
import Peer from 'simple-peer'
import * as stream from "stream";

const defaultConstraints = {
    audio: true,
    video: true,
}

let localStream;

export const getLocalPreviewAndInitRoomConnection =  async (
    isRoomHost,
    identity,
    roomId = null
) => {
    navigator.mediaDevices.getUserMedia(defaultConstraints).then(stream => {
        console.log("successfully connected")
        localStream = stream;
        showLocalVideoPreview(localStream)
        store.dispatch(setShowOverlay(false))
        //dispatch an action to hide overlay
        isRoomHost ? wss.createNewRoom(identity): wss.joinRoom(identity, roomId)
    }).catch(err => {
        console.log('error occurred when trying to get an access to local video');
        console.log(err)
    })
}

const showLocalVideoPreview = (stream) => {
    //show local video preview
};

let peers = {};
let streams = [];

// stun server get allow us about internet connection
const getConfiguration = () => {
    return {
        iceServers: [
            {
                urls: 'stun:stun.l.google.com:19302'

            }
        ]
    }
}

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) =>{
    const configuration = getConfiguration();

    peers[connUserSocketId] = new Peer({
        initiator: isInitiator,
        config: configuration,
        stream: localStream,
    });

    peers[connUserSocketId].on('signal', (data) => {
        // wenRTC offer, webRTC Answer (SDP information), ice candidates

        const signalData = {
            signal: data,
            connUserSocketId: connUserSocketId
        }

        wss.signalPeerData(signalData)
    })

    peers[connUserSocketId].on('stream', (stream) => {
        console.log('new stream came');

        addStream(stream, connUserSocketId);
        stream = [...stream, stream];
    });
};

export const handleSignalingData = (data) => {
    //add signaling data to peer connection
    peers[data.connUserSocketId].signal(data.signal);
};

const addStream = (stream, connUserSocketId) => {
    //display incoming stream
};