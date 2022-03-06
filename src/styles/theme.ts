import { DefaultTheme } from 'styled-components';

type Palette = {
  white: string;
  'white-two': string;
  'dark-indigo': string;
  'warm-grey': string;
  'charcoal-grey-two': string;
  greyish: string;
  'charcoal-grey': string;
  'black-54': string;
  'greeny-blue': string;
  beige: string;
  'beige-two': string;
  'neon-red': string;
  rouge: string;
  primaryColor: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Palette;
  }
}

export const theme: DefaultTheme = {
  colors: {
    primaryColor: '#ee4c77',
    white: 'rgb(216, 216, 216)',
    'white-two': 'rgb(255, 255, 255)',
    'dark-indigo': 'rgb(26, 14, 73)',
    'warm-grey': 'rgb(141, 140, 140)',
    'charcoal-grey-two': 'rgb(64, 62, 77)',
    greyish: 'rgb(181, 180, 180)',
    'charcoal-grey': 'rgb(56, 55, 67)',
    'black-54': 'rgba(0, 0, 0, 0.54)',
    'greeny-blue': 'rgb(87, 187, 188)',
    beige: 'rgb(238, 236, 219)',
    'beige-two': 'rgb(235, 233, 215)',
    'neon-red': 'rgb(255, 15, 68)',
    rouge: 'rgb(153, 18, 55)',
  },
};
