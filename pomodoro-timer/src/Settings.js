import React from 'react'
import ReactSlider from 'react-slider'
import './slider.css';

function Settings() {
  return (
    <div style={{textAlign: 'left'}}>
        <label>Work Minutes: </label>

        <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
        ></ReactSlider>

        <label>Break Minutes: </label>
    </div>
  )
}

export default Settings