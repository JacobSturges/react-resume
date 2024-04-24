import {createTheme, mergeStyleSets} from '@fluentui/react';

export const appTheme = createTheme({
  fonts: {
    mega: {fontSize: 100},
    xxLarge: {fontSize: 40},
    large: {fontSize: 30},
    medium: {fontSize: 20},
    smallPlus: {fontSize: 14},
  },
  palette: {
    themePrimary: '#000000',
    themeLighterAlt: '#898989',
    themeLighter: '#737373',
    themeLight: '#595959',
    themeTertiary: '#373737',
    themeSecondary: '#2f2f2f',
    themeDarkAlt: '#252525',
    themeDark: '#151515',
    themeDarker: '#0b0b0b',
    neutralLighterAlt: '#eeeeee',
    neutralLighter: '#e3e3e3',
    neutralLight: '#dadada',
    neutralQuaternaryAlt: '#cbcbcb',
    neutralQuaternary: '#c2c2c2',
    neutralTertiaryAlt: '#bababa',
    neutralTertiary: '#595958',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#ffffff',
  },
});

export const globalStyle = mergeStyleSets({
  body: {
    selectors: {
      '& > :nth-child(even)': {
        backgroundColor: appTheme.palette.neutralLighterAlt,
      },
    },
  },
});
