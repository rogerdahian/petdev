import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-background',
    'text-foreground',
    'border-border',
    'outline-ring',
    'outline-ring/50',
    'dark',
  ],
}
export default config
