import BgLightMode from './../images/bg.png'
import BgDarkMode from './../images/bg-dark.png'

export const lightTheme = {
  textColor: '#000000',
  bgImg: `url(${BgLightMode})`,
  bgColor: 'rgba(255,255,255,0.5)',
  toggle: {
    bgColor: 'rgba(255,255,255,1)',
  }
}
export const darkTheme = {
  textColor: '#ffffff',
  bgColor: 'rgba(0,0,0,0.75)',
  bgImg: `url(${BgDarkMode})`,
  toggle: {
    bgColor: 'rgba(98,91,92,1)',
  }
}
export const theme = {
  lightTheme,
  darkTheme
}


export default theme;