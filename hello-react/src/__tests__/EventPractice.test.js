import React from "react";
import ReactDOM from "react-dom";
import EventPractice from "../EventPractice";

describe('<EventPractice>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EventPractice />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});