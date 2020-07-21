import React from "react";

const MyComponent = ({name, children}) => {
    return (
        <div>
            Hello, my name is {name}. <br />
            children value is {children}.
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'default'
};

export default MyComponent;