import React, {Component} from 'react';

class Counter extends Component {
    // set initial state
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state;  // use this.state to lookup state
        return (
            <div>
                <h1>{number}</h1>
                <h2>Fixed number: {fixedNumber}</h2>
                {/* set function to call when clicking button by onclick */}
                {/* able to set new value of state through this.setState */}
                <button
                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            };
                        });
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;