import { createContext, type ReactNode, useContext, useState } from 'react';
import type { Drink } from '../types';

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

  const addDrink = (drink: Drink, volume?: number) => {
    const entry: DrinkEntry = {
      id: Date.now().toString(),
      drink,
      timestamp: new Date(),
      volume: volume || drink.defaultVolumeMl,
    };
    setDrinks((prev) => [...prev, entry]);
  };

  const currentBAC = drinks.reduce((total, entry) => {
    const volumeUsed = entry.volume || entry.drink.defaultVolumeMl;
    const alcoholGrams = ((volumeUsed * entry.drink.defaultAbvPercent) / 100) * 0.8;
    return total + alcoholGrams * 0.001;
  }, 0);

  const clearLog = () => setDrinks([]);

  return (
    <DrinkLogContext.Provider value={{ drinks, addDrink, currentBAC, clearLog }}>
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
