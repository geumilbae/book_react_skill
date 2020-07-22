import React, {useState} from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'Snowman'},
        {id: 2, text: 'Ice'},
        {id: 3, text: 'Snow'},
        {id: 4, text: 'Wind'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);  // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>Add</button>
            <ul>{namesList}</ul>
        </>
    );
};

export default IterationSample;

