 const Action = {
     SET_IS_ROOM_HOST: 'SET_IS_ROOM_HOST',
     SET_CONNECT_ONLY_WITH_AUDIO: 'SET_CONNECT_ONLY_WITH_AUDIO',
     SET_ROOM_ID: 'SET_ROOM_ID',
     SET_IDENTITY: 'SET_IDENTITY',
     SET_SHOW_OVERLAY: 'SET_SHOW_OVERLAY',
     SET_PARTICIPANTS: 'SET_PARTICIPANTS'
 };



 export const setIsRoomHost = (isRoomHost) => {
     return {
         type: Action.SET_IS_ROOM_HOST,
         isRoomHost,
     };
 };

 export const setConnectOnlyWithAudio = (onlyWithAudio) => {
    return {
        type: Action.SET_CONNECT_ONLY_WITH_AUDIO,
        onlyWithAudio,
    };
};

 export const setIdentity = (identity) =>{
     return {
         type: Action.SET_IDENTITY,
         identity
     }
 }

 export const setRoomId = (roomId) =>{
     return {
         type: Action.SET_ROOM_ID,
         roomId
     }
 }

 export const setShowOverlay = (showOverlay) =>{
     return {
         type: Action.SET_SHOW_OVERLAY,
         showOverlay
     }
 }

 export const setParticipants = (participants) => {
     return{
         type: Action.SET_PARTICIPANTS,
         participants
     }
 }

 export default Action;