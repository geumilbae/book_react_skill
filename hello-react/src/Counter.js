import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            number: 0
        };
    }
    render() {
        const {number} = this.state;  // use this.state to lookup state
        return (
            <div>
                <h1>{number}</h1>
                {/* set function to call when clicking button by onclick */}
                {/* able to set new value of state through this.setState */}
                <button
                    onClick={() => {
                        this.setState({number: number + 1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;