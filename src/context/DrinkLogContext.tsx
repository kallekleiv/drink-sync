import { createContext, type ReactNode, useContext, useEffect, useState } from 'react';
import { DEFAULT_WEIGHT } from '../constants';
import type { Drink } from '../types';
import { calculateBAC } from '../utils/calculations';

export type DrinkEntry = {
  id: string;
  drink: Drink;
  timestamp: Date;
  volume: number;
};

interface DrinkLogContextType {
  drinks: DrinkEntry[];
  addDrink: (drink: Drink, volume?: number) => void;
  currentBAC: number;
  clearLog: () => void;
}

const DrinkLogContext = createContext<DrinkLogContextType | undefined>(undefined);

export const DrinkLogProvider = ({ children }: { children: ReactNode }) => {
  const [drinks, setDrinks] = useState<DrinkEntry[]>([]);
  const [currentBAC, setCurrentBAC] = useState(0);

  const addDrink = (drink: Drink, volume?: number) => {
    console.log(`Adding ${JSON.stringify(drink)}`);
    const entry: DrinkEntry = {
      id: Date.now().toString(),
      drink,
      timestamp: new Date(),
      volume: volume || drink.defaultVolumeMl,
    };
    setDrinks((prev) => [...prev, entry]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const newBAC = calculateBAC(drinks, DEFAULT_WEIGHT, now);
      setCurrentBAC(newBAC);
    }, 5000); // Update every 5 seconds for smooth progression

    // Initial calculation
    const now = Date.now();
    setCurrentBAC(calculateBAC(drinks, DEFAULT_WEIGHT, now));

    return () => clearInterval(interval);
  }, [drinks]);

  const clearLog = () => {
    setDrinks([]);
    setCurrentBAC(0);
  };

  return (
    <DrinkLogContext.Provider value={{ drinks, addDrink, clearLog, currentBAC }}>
      {children}
    </DrinkLogContext.Provider>
  );
};

export const useDrinkLog = () => {
  const context = useContext(DrinkLogContext);
  if (!context) {
    throw new Error('useDrinkLog must be used within DrinkLogProvider');
  }
  return context;
};
