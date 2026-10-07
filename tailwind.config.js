/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portal: {
          navy: '#0B2545',
          'navy-dark': '#06172D',
          'navy-light': '#133E87',
          blue: '#1E40AF',
          'blue-light': '#3B82F6',
          'blue-soft': '#EFF6FF',
          saffron: '#FF671F',
          'saffron-dark': '#E0530A',
          'saffron-light': '#FFF7ED',
          'saffron-border': '#FED7AA',
          green: '#046A38',
          'green-light': '#059669',
          'green-soft': '#F0FDF4',
          'green-border': '#BBF7D0',
          charcoal: '#1E293B',
          gray: '#64748B',
          'gray-light': '#F8FAFC',
          'gray-border': '#E2E8F0',
          gold: '#D97706',
          'gold-light': '#FEF3C7',
          silver: '#64748B',
          bronze: '#B45309'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'portal-card': '0 4px 20px -2px rgba(11, 37, 69, 0.08), 0 2px 6px -1px rgba(11, 37, 69, 0.04)',
        'portal-hover': '0 10px 25px -3px rgba(11, 37, 69, 0.12), 0 4px 10px -2px rgba(11, 37, 69, 0.06)',
        'portal-header': '0 2px 12px 0 rgba(11, 37, 69, 0.08)'
      }
    },
  },
  plugins: [],
}
