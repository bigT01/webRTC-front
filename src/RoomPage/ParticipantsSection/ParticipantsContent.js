import React from "react";
import { connect } from 'react-redux'


const SingleParticipants = ( props ) => {
    const {identity, lastItem, participants} = props;

    return(
        <>
            <p className={'participants_paragraph'}>
                {identity}
            </p>
            {!lastItem && <span className={'participants_separator_line'} />}
        </>

    )
}

function ParticipantsContent({ participants }){
    return(
        <div className={'participants_container'}>
            {participants.map((participant, index) => {
                return(
                    <SingleParticipants
                        key={participant.identity}
                        lastItem={participants.length === index + 1}
                        participants={participant}
                        identity={participant.identity}/>
                )
            })}
        </div>
    )
}

const mapStoreStateToProps = (state) => {
     return{
         ...state
     }
}

export default connect(mapStoreStateToProps)(ParticipantsContent);