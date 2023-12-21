import React, { useState } from 'react';
import './App.css';
import Character from './Components/Character';
import CharactersList from './Components/CharactersList';
import LoadButton from './Components/LoadButton';
import Person from './Components/Interface/interface';

function App() {
    const [characters, setCharacters] = useState<Person[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState<number>(1);

    const handleLoadData = (): void => {
        const charactersArray: Person[] = [];

        const fetchPromises = [];

        for (let i = currentId; i < currentId + 5; i++) {
            setIsError(false);

            const fetchPromise = fetch(`https://swapi.dev/api/people/${i}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json() as Promise<Person>;
                    }
                    throw new Error(response.statusText);
                })
                .then((data: Person) => {
                    charactersArray.push(data);
                })
                .catch((err) => {
                    setIsError(true);
                });

            fetchPromises.push(fetchPromise);
        }

        Promise.all(fetchPromises)
            .then(() => {
                setCurrentId(currentId + 5);
                setCharacters((prevCharacters) => [
                    ...prevCharacters,
                    ...charactersArray,
                ]);
            })
            .catch((err) => {
                setIsError(true);
            });
    };
    return (
        <div className='App'>
            <h1>Star Wars characters catalog</h1>
            <CharactersList characters={characters} />
            <LoadButton handleClick={handleLoadData} />
        </div>
    );
}

export default App;
