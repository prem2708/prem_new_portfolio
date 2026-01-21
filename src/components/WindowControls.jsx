import React from 'react'
import useWindowStore from '#store/window.js';

const WindowControls = ({target}) => {
    const {closewindow} = useWindowStore();

  return  <div id = "window-controls">
    <div className='close' onClick={()=> closewindow(target)}/>
    <div className='minimize'/>
    <div className='maximize'/>
    </div>
  
}

export default WindowControls
