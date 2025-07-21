import {
  ALCOHOL_DENSITY,
  BAC_THRESHOLDS,
  BODY_WATER_CONSTANT,
  METABOLISM_RATE,
} from '../constants';
import type { DrinkEntry } from '../context/DrinkLogContext';

export const calculateBAC = (drinks: DrinkEntry[], weightKg: number, now: number): number => {
  return drinks.reduce((acc, entry) => {
    const hoursAgo = (now - entry.timestamp.getTime()) / 3600000;
    const minutesAgo = hoursAgo * 60;

    console.log(`Drink: ${entry.drink.label}, ${minutesAgo.toFixed(1)} min ago`);

    const absorptionFactor = getAbsorptionFactor(hoursAgo);
    console.log(`Absorption factor: ${absorptionFactor.toFixed(3)}`);

    const pureAlcoholMl = (entry.volume * entry.drink.defaultAbvPercent) / 100;
    const grams = pureAlcoholMl * ALCOHOL_DENSITY;
    const maxBAC = grams / (weightKg * BODY_WATER_CONSTANT);

    const currentBAC = maxBAC * absorptionFactor;
    const metabolized = METABOLISM_RATE * Math.max(0, hoursAgo - 0.5);

    const finalBAC = Math.max(0, currentBAC - metabolized);
    console.log(`Max: ${maxBAC.toFixed(4)}, Current: ${finalBAC.toFixed(4)}`);

    return acc + finalBAC;
  }, 0);
};

const getAbsorptionFactor = (hoursAgo: number): number => {
  if (hoursAgo < 0) return 0;
  if (hoursAgo < 0.5) return hoursAgo * 2;
  return 1;
};

export const getDrunkFeedback = (
  bac: number,
): {
  status: string;
  message: string;
  color: string;
} => {
  if (bac === BAC_THRESHOLDS.sober) {
    return {
      status: 'Sober',
      message: 'Fit to drive heavy machinery in crowds.',
      color: '#ffffff',
    };
  } else if (bac < BAC_THRESHOLDS.tipsy) {
    return {
      status: 'Sober-ish',
      message: 'You’re clear-headed and chill.',
      color: '#bbdb44',
    };
  } else if (bac < BAC_THRESHOLDS.lykkepromille) {
    return {
      status: '✅ Lykkepromille',
      message: 'Feeling good! Happy, social buzz.',
      color: '#44ce1b',
    };
  } else if (bac < 0.15) {
    return {
      status: 'Tipsy',
      message: 'Time to pace yourself.',
      color: '#bbdb44',
    };
  } else if (bac < 0.2) {
    return {
      status: 'Drunk',
      message: 'Balance and judgment are slipping. Do not text exes.',
      color: '#f7e379',
    };
  } else if (bac < 0.3) {
    return {
      status: 'Bro, Stop',
      message: 'This is dangerous. Don’t drink more.',
      color: '#f2a134',
    };
  } else {
    return {
      status: 'Too High',
      message: 'This level is medically unsafe. Seek help.',
      color: '#e51f1f',
    };
  }
};
