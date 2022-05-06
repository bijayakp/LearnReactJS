import React, { useEffect,  useState } from 'react';

class DigitalClock extends React.Component {
    constructor() {
        super();
        this.state = {
            currentDate : new Date()
        }
    }

   

    MountClock = () => {
        this.timer = setInterval(
            () => this.setState({currentDate: new Date()}),
            1000
        );
    }

    UnmountClock = () => {
        clearInterval(this.timer);
    }

    render() {
        return(
            <>
                <h2>Digital Clock</h2>
                <div class="date-time">
                    Current Time: <span>{this.state.currentDate.toLocaleTimeString()}</span>
                </div>
                <button onClick={this.MountClock} >Start Clock</button>
                <button onClick={this.UnmountClock} >End Clock</button>
            </>
        )
    }
}

export default DigitalClock;