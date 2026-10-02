/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        touri: {
          // Bleu Primaire de confiance technologique (Stabilité & Sérénité)
          blue: {
            50: '#f0f7ff',
            100: '#e0effe',
            200: '#badcfe',
            300: '#7cc0fd',
            400: '#389ffd',
            500: '#0f7bf2', // Couleur principale de la marque
            600: '#025ec7',
            700: '#034ba1',
            800: '#074084',
            900: '#0b366e',
            950: '#07234a',
          },
          // Vert Secondaire de fluidité (Gain de temps, Rapidité & Efficacité)
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#10b981', // Couleur du gain de temps / validation de ticket
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22',
          },
          // Nuances sombres optimisées pour les Dashboards de file d'attente
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#030712',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}