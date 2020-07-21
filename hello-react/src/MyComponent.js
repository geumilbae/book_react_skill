import React, {Component} from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const {name, children, favoriteNumber} = this.props;
        return (
            <div>
                Hello, my name is {name}.<br/>
                Children value is {children}<br/>
                My favorite number is {favoriteNumber}.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: 'default'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;