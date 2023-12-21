import React from 'react';
import { useState } from 'react';
import '../Styles/character.css';
import Person from './Interface/interface';
import { ReactComponent as FemaleSymbol } from './Images/female.svg';
import { ReactComponent as MaleSymbol } from './Images/male.svg';

const Character: React.FC<Person> = (props) => {
    const [displayStyle, setDisplayStyle] = useState<'block' | 'none'>('none');

    const showDescription = (): void => {
        setDisplayStyle(displayStyle === 'block' ? 'none' : 'block');
    };
    return (
        <div className='character'>
            <div className='title'>
                <div className='icon'>
                    {props.gender === 'female' ? (
                        <FemaleSymbol />
                    ) : props.gender === 'male' ? (
                        <MaleSymbol />
                    ) : null}
                </div>
                <h2>{props.name}</h2>
                <div
                    className='arrow'
                    onClick={showDescription}
                >
                    V
                </div>
            </div>
            <div
                className='description'
                style={{ display: displayStyle }}
            >
                <p>
                    Gender: <strong>{props.gender}</strong>
                </p>
                <p>
                    Date of birth: <strong>{props.birth_year}</strong>
                </p>
                <p>
                    Height: <strong>{props.height} cm </strong>
                </p>
            </div>
        </div>
    );
};

export default Character;
