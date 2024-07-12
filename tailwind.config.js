/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    
    fontFamily: {
      'yellowtali': ['Yellowtail', 'sans-serif'],
      'ibm': ['IBM Plex Sans', 'sans-serif'],
    },


    extend: {
      backgroundImage: {
        'banner': "url('../src/assets/banner.png')",
      },
      maxWidth: {
        'max_width': '1920px',
      },
      spacing: {
        'bigScreen': '1320px',
        'lgScreen': '960px',
        'xlScreen': '1200px',
      },
      colors: {
        'primary_color': '#FF9600',
      },
    },
  },
  plugins: [],
}