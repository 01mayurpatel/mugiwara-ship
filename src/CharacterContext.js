import { createContext, useState, useContext } from 'react';

// Create the context
const CharacterContext = createContext();

// Create a provider component
export const CharacterProvider = ({ children }) => {
  const [characterName, setCharacterName] = useState('');

  const updateCharacterName = (newName) => {
    setCharacterName(newName);
  };

  return (
    <CharacterContext.Provider value={{ characterName, updateCharacterName }}>
      {children}
    </CharacterContext.Provider>
  );
};

// Create a custom hook to use the context
export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};
