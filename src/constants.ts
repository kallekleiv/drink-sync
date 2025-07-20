import type { Drink } from './types';

export const MAX_BAC = 0.3;

export const BAC_THRESHOLDS = {
  sober: 0.0,
  tipsy: 0.05,
  lykkepromille: 0.1,
  caution: 0.15,
  drunk: 0.2,
  wrecked: MAX_BAC,
};

export const DRINKS = {
  beer: {
    label: 'Beer',
    emoji: '🍺',
    defaultVolumeMl: 400,
    defaultAbvPercent: 4.7,
  },
  wine: {
    label: 'Wine',
    emoji: '🍷',
    defaultVolumeMl: 150,
    defaultAbvPercent: 12,
  },
  shot: {
    label: 'Shot',
    emoji: '🥃',
    defaultVolumeMl: 40,
    defaultAbvPercent: 40,
  },
} as const satisfies Record<string, Drink>;

export const LEGAL_LIMITS = {
  car: 0.02,
  boat: 0.08,
};
