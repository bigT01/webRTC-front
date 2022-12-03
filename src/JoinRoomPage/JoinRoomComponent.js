import React, {useState} from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import {setConnectOnlyWithAudio, setIdentity, setRoomId} from '../store/action';
import ErrorMessage from './ErrorMessage';
import JoinRoomButtons from './JoinRoomButtons';
import JoinRoomInputs from './JoinRoomInputs';
import OnlyWithAudioCheckBox from './OnlyWithAudioCheckBox';
import { useNavigate } from "react-router-dom";
import {getRoomExists} from "../utils/api";


function JoinRoomComponent(props) {
    const {isRoomHost, setConnectOnlyWithAudio, connectWithOnlyAudio, setIdentityAction, setRoomId} = props;
    const [roomIdValue, setRoomIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();



    const handleJoinRoom = async () => {
        setIdentityAction(nameValue)
        if(isRoomHost){
            await createRoom();
        } else{
            await joinRoom();
        }
    };

    const joinRoom = async () => {
        const responseMessage = await getRoomExists(roomIdValue)
        const { roomExists, full } = responseMessage

        if(roomExists){
            if(full){
                setErrorMessage('Room is full. Please try again later.')
            } else{
                // join a room !
                setRoomId(roomIdValue);
                navigate('/room');
            }
        }else{
            setErrorMessage('Meeting is not found. Check your meeting id')
        }
    }

    const createRoom = () => {
        navigate('/room')
    }

    return (
        <>
            <JoinRoomInputs 
            roomIdValue={roomIdValue} 
            setRoomIdValue={setRoomIdValue} 
            nameValue={nameValue}
            setNameValue={setNameValue}
            isRoomHost={isRoomHost}/>
            <OnlyWithAudioCheckBox setConnectOnlyWithAudio={setConnectOnlyWithAudio} connectWithOnlyAudio={connectWithOnlyAudio}/>
            <ErrorMessage errorMessage={errorMessage}/>
            <JoinRoomButtons handleJoinRoom={handleJoinRoom} isRoomHost={isRoomHost}/>
        </>
      );
}

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

const mapActionsToProps = (dispatch) => {
    return{
        setConnectOnlyWithAudio: (onlyWithAudio) => 
            dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
        setIdentityAction: (identity) => dispatch(setIdentity(identity)),
        setRoomId: (roomId) => dispatch(setRoomId(roomId))
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomComponent);

