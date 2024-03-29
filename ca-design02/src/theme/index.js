

const theme = {
  colors: {
    primary: '#364DBF',
    secondary: '#111313',
    blue: {
      100: '#6073D2',
      200: '#5065CE',
      300: '#4057C9',
      400: '#364DBF',
      500: '#2F42A5',
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
  fontSizes: [0.5, 1, 1.5, 2, 2.5, 3],
  margin: {
    xs: '0.5rem',
    s: '1rem',
    md: '1.5rem',
    l: '2rem'
  },
  padding: {
    p1: '0.5rem',
    p2: '0.8rem',
    p3: '1rem',
    p4: '1.5rem',
    p5: '2rem',
    p6: '2.5rem',
    p7: '3rem'
  },
  fontFamily: {
    header: `'Josefin Sans', sans-serif`,
    text: `'Work Sans', sans-serif`,
  },
  fontWeight: {
    extraLight: 200, //body
    light: 300, // body
    regular: 400, //Both
    medium: 500, //header
    bold: 700, // header
  },
  transition: [0.2, 0.3, 0.4],
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

export default theme
