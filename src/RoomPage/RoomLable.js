import React from "react";

function RoomLable({roomId}){
    return(
        <div className={'room_label'}>
            <p className={'room_label_paragraph'}>ID: {roomId}</p>
        </div>
    )
}

export default RoomLable;