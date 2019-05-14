import React from 'react';
import PropTypes from 'prop-types';
import StopwatchButton from './StopwatchButton';

const StopwatchControls = ({status,onStartWatch,onResetWatch,onPauseWatch})=>{
    return (
        <div>
           
      <StopwatchButton text="Comenzar" 
                       onClick = {onStartWatch}
                       style={{display: (status === 'idle'? 'inline': 'none')}}/>
      
      
      <StopwatchButton text="Pausar"
                       style={{display: (status === 'running'? 'inline': 'none')}}
                       onClick ={onPauseWatch}/>
      <StopwatchButton text="Continuar"
                       style={{display: (status === 'paused'? 'inline': 'none')}}
                       onClick ={onStartWatch}/>
                       <StopwatchButton text="Restablecer"
                       style={{display: (status === 'paused' ? 'inline': 'none')}}
                       onClick ={onResetWatch}/>
        </div>
    )
}

StopwatchControls.propTypes={
    status: PropTypes.oneOf(["idle","running","paused"]),
    onResetWatch: PropTypes.func.isRequired,
    onStartWatch: PropTypes.func.isRequired,
    onPauseWatch: PropTypes.func.isRequired
}

export default StopwatchControls;