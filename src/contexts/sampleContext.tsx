import React, { ReactNode, createContext, useContext, useState } from 'react';

// Initialization -----------
interface SampleContextType {
  stateValue: string;
  setStateValue: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<SampleContextType | undefined>(undefined);

// Provider setup -----------
interface SampleProviderProps {
  children: ReactNode;
}

export const SampleProvider: React.FC<SampleProviderProps> = ({ children }) => {
  const [stateValue, setStateValue] = useState<string>('');

  return (
    <MyContext.Provider value={{ stateValue, setStateValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Context setup ------------
export const useSampleContext = (): SampleContextType => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useSampleContext must be used within a SampleProvider');
  }

  return context;
};