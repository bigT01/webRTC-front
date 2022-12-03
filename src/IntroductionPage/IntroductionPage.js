import React, { useEffect } from 'react';
import logo from "../public/img/logo.png"
import ConnectingButtons from './ConnnectingButtons';
// @ts-ignore
import { connect } from 'react-redux';
import { setIsRoomHost } from '../store/action';


import './IntroductionPage.css';


function IntroductionPage({ setIsRoomHostAction }) {
  useEffect(() =>{
    setIsRoomHostAction(false)
  })

  return (
    <div className={'introduction_page_container'}>
        <div className='introduction_page_panel'>
          <img src={logo} className='introduction_page_image' alt={'logo'}/>
          <ConnectingButtons />
        </div>
    </div>
  );
}

const mapActionToProps = (dispatch) => {
  return{
    setIsRoomHostAction: (IsRoomHost) => dispatch(setIsRoomHost(IsRoomHost))
  }
}

export default connect(null, mapActionToProps)(IntroductionPage);
