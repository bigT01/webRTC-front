import Action from "./action";

const initState = {
    identity: '',
    isRoomHost: false,
    connectWithOnlyAudio: false,
    roomId: null,
    showOverlay: true,
    participants:[]
};

const reducer = (state = initState, action) =>{
    switch(action.type){
        case Action.SET_IS_ROOM_HOST:
            return{
                ...state,
                isRoomHost: action.isRoomHost,
            };
        case Action.SET_CONNECT_ONLY_WITH_AUDIO:
            return{
                ...state,
                connectWithOnlyAudio: action.onlyWithAudio
            }
        case Action.SET_ROOM_ID:
            return {
                ...state,
                roomId: action.roomId
            }
        case Action.SET_IDENTITY:
            return{
                ...state,
                identity: action.identity
            }
        case Action.SET_SHOW_OVERLAY:
            return {
                ...state,
                showOverlay: action.showOverlay
            }
        case Action.SET_PARTICIPANTS:
            return {
                ...state,
                participants: action.participants
            }
        default:
            return state;    
    }
}

export default reducer