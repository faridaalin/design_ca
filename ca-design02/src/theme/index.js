
const theme = {
  colors: {
    pink: {
      100: '#F9928F',
      200: '#EA7774',
      300: '#E8635E',
      400: '#E55550',
      500: '#E34641',
    },
    black: {
      100: '#2d3232',
      200: '#262a2a',
      300: '#1f2222',
      400: '#181b1b',
      500: '#111313',
    },
    grey: {
      100: '#f5f5f8',
      200: '#ececf1',
      300: '#dddde7',
      400: '#c5c5d6',
      500: '#b6b6cb',
    },

  },
  fontSizes: [12, 14, 16, 18, 24, 26],
  margin: {
    xs: '0.5rem',
    s: '1rem',
    md: '1.5rem',
    l: '2rem'
  },
  fontFamily: {
    header: `'Raleway', sans-serif`,
    text: `'Work Sans', sans-serif`,
  },
  fontWeight: {
    extraLight: 200, //body
    light: 300, // body
    regular: 400, //Both
    medium: 500, //header
    bold: 700, // header
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

theme.borders = {
  thin: '1px solid',
  thick: '2px solid'
}

export default theme
