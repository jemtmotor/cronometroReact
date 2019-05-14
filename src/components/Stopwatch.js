import React from 'react';
import StopwatchButton from './StopwatchButton.js'
import StopwatchDisplay from "./StopwatchDisplay.js"
import StopwatchControls from './StopwatchControls.js';

class Stopwatch extends React.Component{
    constructor(){
                super()
                this.state ={
                    time: 0,
                    status: 'idle'
                }
        
               
                
            }

            startWatch= () => {

               this.intervalHandler = setInterval(()=>{
                    const time = this.state.time + 100
                    this.setState({
                        time: time
                    })
                },100)
                
                this.setState({
                    status: 'running'
                });
            }

            resetWatch = () => {
                const status = this.state.status === 'paused' ? 'idle' : 'running';
                const time =0
                    this.setState({
                        time: time,
                        status
                    })
            }

            pausedWatch = () => {
                clearInterval(this.intervalHandler)
                this.setState({
                    status: 'paused'
                });
            }

    render(){
        const {time,status} = this.state;
        return(<div>
            <StopwatchDisplay time = {time}/>
            <StopwatchControls onStartWatch = {this.startWatch} status={status} onResetWatch = {this.resetWatch} onPauseWatch={this.pausedWatch}/>
             
        </div>)
    }

}

export default Stopwatch;