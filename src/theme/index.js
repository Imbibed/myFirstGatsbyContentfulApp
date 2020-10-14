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