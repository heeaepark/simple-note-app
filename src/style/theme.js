import BgLightMode from './../images/bg.png'
import BgDarkMode from './../images/bg-dark.png'
import ArrowLight from './../images/ic-arrow-w.png'
import ArrowDark from './../images/ic-arrow-b.png'

export const lightTheme = {
  textColor: '#2B2B2D',
  subTextColor: '#7F7F84',
  bgImg: `url(${BgLightMode})`,
  bgColor: 'rgba(255,255,255,0.5)',
  toggle: {
    bgColor: 'rgba(255,255,255,1)',
  },
  searchInput: {
    bgColor: 'rgba(255,255,255,0.7)',
    arrow: `url(${ArrowDark})`,
  },
  noteInput: {
    bgColor: 'rgba(255,255,255,1)',
  },
}
export const darkTheme = {
  textColor: '#ffffff',
  subTextColor: '#ADADAD',
  bgColor: 'rgba(0,0,0,0.75)',
  bgImg: `url(${BgDarkMode})`,
  toggle: {
    bgColor: 'rgba(98,91,92,1)',
  },
  searchInput: {
    bgColor: 'rgba(255,255,255,0.3)',
    arrow: `url(${ArrowLight})`,
  },
  noteInput: {
    bgColor: 'rgba(37,37,37,1)',
  },
}
export const theme = {
  lightTheme,
  darkTheme,
}



export default theme;