import React, { useEffect,  useState } from 'react';

class DigitalClock extends React.Component {
    constructor() {
        super();
        this.state = {
            currentDate : new Date()
        }
        this.MountClock();
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
                <div className="clock-face">
                    {this.state.currentDate.toLocaleString()}
                </div>
            </>
        )
    }
}

export default DigitalClock;