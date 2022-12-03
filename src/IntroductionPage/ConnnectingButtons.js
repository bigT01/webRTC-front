import React from 'react';
import ConnectingButton from './ConnectingButton';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

function ConnectingButtons() {
    let navigate = useNavigate()
    
    const pushToJoinRoomPage = () => {
        navigate('/join-room')
    };

    const pushToJoinPageAsHost = () => {
        navigate('/join-room?host=true')
    };

    return (
        <div className='connecting_buttons_container'>
            <ConnectingButton buttonText={'Join a meeting'} onClickHandler={pushToJoinRoomPage}/>
            <ConnectingButton createRoomButton={true} buttonText={'Host a meeting'} onClickHandler={pushToJoinPageAsHost}/>
        </div>
    );
}

export default ConnectingButtons;
