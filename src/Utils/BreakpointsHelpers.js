import Breakpoints from '../theme/Breakpoints';

const styleForTabletAndMobile = () => 
  `@media screen and (max-width: ${Breakpoints.tablet.maxBreakpoint}px)`;
const styleForMobile = () => 
  `@media screen and (max-width: ${Breakpoints.mobile.maxBreakpoint}px)`;
const styleForTablet = () =>
  `@media screen and (min-width: ${Breakpoints.tablet.breakpoint}px) and (max-width: ${Breakpoints.tablet.containerMaxWidth}px)`;
const styleForDesktop = () =>
  `@media screen and (min-width: ${Breakpoints.desktop.breakpoint}px)`;
  
export { styleForTabletAndMobile, styleForMobile, styleForTablet, styleForDesktop };