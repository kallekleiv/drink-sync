import { BAC_THRESHOLDS } from '../constants';

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
