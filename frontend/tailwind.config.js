/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00A651', // College Green (Explicitly #00A651)
        'secondary': '#FFFFFF', // White
        'accent': '#90EE90', // Soft Light Green (can be adjusted if needed for subtle green)
        'text-gray': '#333333', // Dark Gray for general body text

        'glass': 'rgba(144, 238, 144, 0.2)', // Green-tinted glass effect (using accent color)

        // Chat bubble specific colors for Green & White theme (ChatGPT style)
        'chat-user-bg': '#FFFFFF', // User messages: White background
        'chat-user-border': '#00A651', // User messages: Green border
        'chat-user-text': '#333333', // User messages: Dark text
        'chat-bot-bg': '#E0FFE0', // Bot messages: Subtle Light Green
        'chat-bot-text': '#333333', // Bot messages: Dark text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      minHeight: {
        '48': '48px',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}
