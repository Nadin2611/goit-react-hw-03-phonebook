export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    dark: '#19191A',
    violet: '#a972cb',
    pink: '#ff4d4d',
    orange: '#ffa260',
    green: '#59b969',
    red: '#ff0000',
    gray: '#444444',
    lightGray: '#f0f0f0',
  },
  fontSizes: {
    xs: '14px',
    small: '18px',
    medium: '22px',
    large: '28px',
    big: '36px',
  },

  background: {
    black: 'rgba(0, 0, 0, 0.07)',
    greenBtn: 'linear-gradient(#63e651, #42753e)',
    greenHover: 'linear-gradient(#51db1c, #6ba061)',
    redBtn: 'linear-gradient(#ff6666, #cc0000)',
    redHover: 'linear-gradient(#ff3333, #cc0000)',
    blue: 'linear-gradient(#99ccff, #66a3ff)',
  },

  spacing: value => `${4 * value}px`,
  shadows: {
    green: '0 1px 0 0 #60bd49 inset',
    red: '0 1px 0 0 #ff6666 inset',
    regular: ' 0 0 20px 0 #000000',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18)',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
