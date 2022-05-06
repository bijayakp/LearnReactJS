import React, { useEffect,  useState } from 'react';

class DigitalClock extends React.Component {
    constructor() {
        super();
        this.state = {
            currentDate : new Date()
        }
       
    }

   

    componentDidMount = () => {
        this.timer = setInterval(
            () => this.setState({currentDate: new Date()}),
            1000
        );
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    render() {
        return(
            <>
                <h2 className='digitalClock-Title'>Digital Clock</h2>
                <hr></hr>
                <div className="digitalClock-Clock">
                    {this.state.currentDate.toLocaleString()}
                </div>
            </>
        )
    }
}

export default DigitalClock;