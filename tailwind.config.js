/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      cyan:{
        50:"#ecfeff",
        100:"#cffafe",
        200:"#a5f3fc",
        300:"#67e8f9",
        400:"#22d3ee",
        500:"#06b6d4",
        600:"#0891b2",
        700:"#0e7490",
        800:"#155e75",
        900:"#164e63",
        950:"#083344",
      },
      teal:{
        50:"#f0fdfa",
        100:"#ccfbf1",
        200:"#99f6e4",
        300:"#5eead4",
        400:"#2dd4bf",
        500:"#14b8a6",
        600:"#0d9488",
        700:"#0f766e",
        800:"#115e59", //nofurros only bandidassa
        900:"#134e4a",
        950:"#042f2e",
      },
    },
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          fontFamily: {
            'custom': ['TRON', 'sans'], // Replace 'TRON' with your actual font name
          },
      },
    },
  },
  plugins: [],
}
