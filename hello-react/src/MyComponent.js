import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({name, children}) => {
    return (
        <div>
            Hello, my name is {name}. <br/>
            children value is {children}.
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'default'
};

MyComponent.propTypes = {
    name: PropTypes.string
};

export default MyComponent;