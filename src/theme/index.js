import { mailjet } from "mailjet-react-components";
import { merge } from 'lodash';
import Breakpoints from "./Breakpoints";

const customTheme = {
  colors: {
    red: '#e9251e',
    blue: '#3e5e9c',
    green: '#18550c',
    darkGrey: 'rgba(78, 93, 129, 0.24)',
    lightGrey: 'rgb(201, 206, 214)',
    middleGrey: 'rgb(138, 148, 166)',
    sherpa: {
      _0: "#F6F8F9",
      _10: "#D0E0E6",
      _20: "#AFBEC8",
      _30: "#5A98A9",
      _40: "#377386",
      _60: "#195A6A",
      _70: "#03414E",
      _80: "#002025"
    },
    neutral: {
      _0: "#FFFFFF",
      _10: "#F5F6F6",
      _20: "#E3E7E9",
      _30: "#B3BDC4",
      _40: "#8796A0",
      _50: "#63737E",
      _60: "#46545C",
      _70: "#2D3941",
      _80: "#131B20"
    }
  },
  sizes: {
    small: '14px',
    medium: '20px',
    large: '32px',
  },
}

const theme = merge({}, mailjet, customTheme);
theme.responsive = Breakpoints;

export default theme;