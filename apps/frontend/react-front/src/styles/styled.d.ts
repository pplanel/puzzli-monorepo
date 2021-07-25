/* eslint-disable camelcase */

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      green: string;
      red: string;
      grayShade1: string;
      grayShade2: string;
      grayShade3: string;
      grayShade4: string;
      grayShade5: string;
      grayShade6: string;
      grayShade7: string;
      grayShade8: string;
      grayShade9: string;
      black: string,
      white: string;
    };
  }
}
