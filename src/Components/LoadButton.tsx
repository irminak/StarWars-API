import React from 'react';
import '../Styles/loadButton.css';

interface LoadButtonProps {
    handleClick: () => void;
}

const LoadButton: React.FC<LoadButtonProps> = (props) => {
    return <button onClick={props.handleClick}>Load 5 characters</button>;
};

export default LoadButton;
