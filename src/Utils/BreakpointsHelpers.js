import Breakpoints from '../theme/Breakpoints';

const styledForTabletAndMobile = () => `@media screen and (max-width: ${Breakpoints.tablet.containerMaxWidth})`;
const styledForMobile = () => `@media screen and (max-width: ${Breakpoints.mobile.containerMaxWidth})`;
const styledForDesktop = () => 
`@media screen and (min-width: ${Breakpoints.desktop.breakpoint}px)`;
const styledForTablet = () => 
`@media screen and (min-width: ${Breakpoints.tablet.breakpoint}px) and (max-width: ${Breakpoints.tablet.containerMaxWidth})`;

export { styledForTabletAndMobile, styledForMobile, styledForDesktop, styledForTablet};