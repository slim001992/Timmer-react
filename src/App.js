import React, { Component } from 'react'
import './App.css';

 class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        status: false,
        runningTime: 0,
        seconds:0,
        hours:0,
        minutes:0
    }
  
    setInterval( () => {
      if(this.state.status){
        if(this.state.seconds < 60) {
          this.setState({seconds:this.state.seconds+1})
        }
        if(this.state.seconds > 59){
          this.setState({minutes:this.state.minutes+1});
          this.setState({seconds:0})
        }
        if(this.state.minutes > 59){
          this.setState({hours:this.state.hours+1});
          this.setState({minutes:0});
          this.setState({seconds:0})
        }
        
      }
    } , 1000)
}

Click = () => {
    this.setState( {status: !this.state.status} )
}

Reset = () => {
    this.setState({ status:false, runningTime: 0, seconds:0, hours:0, minutes:0 });
};


render() {
return (
          <div className="background">
            <div className="full-timer-container ">
                <div className="time-container1">
                    <p className="timer-form">{String(this.state.hours).padStart(2, '0')}:</p>
                    <p className="timer-form">{String(this.state.minutes).padStart(2, '0')}:</p>
                    <p className="timer-form">{String(this.state.seconds).padStart(2, '0')}</p>
                </div>
                <div className="time-container">
                    <p className="timer-comment">Hours</p>
                    <p className="timer-comment">Minute</p>
                    <p className="timer-comment">Second</p>
                </div>

            </div>
            <div className="btnn">
                <button className="btn" onClick={this.Click}>{this.state.status ? 'Stop' : 'Start'}</button>
                <button className="btn" onClick={this.Reset}>Reset</button>
            </div>
            </div>
       
)
}
}
export default App