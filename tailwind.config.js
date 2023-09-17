/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0b10c',
        secondary: '#1c0b35',
        tertiary: '#a230bc'
      },
      flexGrow: {
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      boxShadow: {
        '1': `0 0 56px 0px var(--color-secondary),
        0 0 16px 0px var(--color-tertiary)
        `,
      }
    },
  },
  plugins: [],
}
