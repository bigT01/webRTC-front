import React from "react";
import ParticipantsLabel from "./ParticipantsLable";
import ParticipantsContent from "./ParticipantsContent";

function Participants(){
    return(
        <div className={'participants_section_container'}>
            <ParticipantsLabel />
            <ParticipantsContent />
        </div>
    )
}

export default Participants;