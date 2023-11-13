import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { SampleType } from "@/types";

// Initialization -----------
interface SampleContextType {
  sampleData: SampleType[];
  isLoading: boolean;
}

const MyContext = createContext<SampleContextType | undefined>(undefined);

// Provider setup -----------
interface SampleProviderProps {
  children: ReactNode;
}

export const SampleProvider: React.FC<SampleProviderProps> = ({ children }) => {
  const [sampleData, setSampleData] = useState<SampleType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/sampleData`);
        setSampleData(response.data);
      } catch (e) {
        if (axios.isAxiosError(error)) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred fetching SampleData'));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <MyContext.Provider value={{ sampleData, isLoading }}>
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