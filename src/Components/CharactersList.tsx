import React from 'react';
import '../Styles/charactersList.css';
import Character from './Character';
import Person from './Interface/interface';

interface CharactesListProps {
    characters: Person[];
}

const CharactersList: React.FC<CharactesListProps> = (props) => {
    return (
        <div className='characters-list'>
            {props.characters.map((character) => (
                <Character
                    name={character.name}
                    gender={character.gender}
                    birth_year={character.birth_year}
                    height={character.height}
                />
            ))}
        </div>
    );
};

export default CharactersList;
