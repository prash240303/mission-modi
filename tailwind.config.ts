import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Brygada 1918"', 'serif'],
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '105rem',
        '10xl': '120rem',
      },
      colors: {
        transparent: 'transparent',
        'white-15': 'rgba(255, 255, 255, 0.15)',
        jse: {
          primary: {
            100: '#FFF1E5',
            200: '#FFE3CC',
            300: '#FEC799',
            400: '#FEAB66',
            500: '#FD8F33',
            600: '#FD7300',
          },
          neutral: {
            0: '#ffffff',
            100: '#f0f0f0',
            200: '#e0e1e1',
            300: '#c1c3c3',
            400: '#828787',
            500: '#434b4b',
            900: '#040f0f',
          },
          semantic: {
            info: '#6554c0',
            warning: '#ffab00',
            success: '#36b37e',
            error: '#ef233c',
          },
        },
      },    
    },
  },
  plugins: [],
};
export default config;
