import React from "react";

const MyComponent = props => {
    return (
        <div>
            Hello, my name is {props.name}. <br />
            children value is {props.children}.
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'default'
};

export default MyComponent;