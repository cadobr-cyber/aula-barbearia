/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // ─── Paleta base ───────────────────────────────────────────
        // Pretos e cinzas escuros
        pitch: {
          950: '#0a0804',   // quase preto com leve tom quente
          900: '#111009',
          800: '#1a1812',
          700: '#242118',
        },
        // Marrons
        bark: {
          900: '#2c1a0e',
          800: '#3d2512',
          700: '#5c3720',
          600: '#7a4a2c',
          500: '#9a6040',
          400: '#b87d58',
          300: '#d4a07c',
        },
        // Dourados / âmbar
        gold: {
          700: '#8a6200',
          600: '#b07d00',
          500: '#d4a017',
          400: '#e8b830',
          300: '#f5cc55',
          200: '#fae090',
          100: '#fdf3cc',
        },
        // Brancos e cremes
        cream: {
          50:  '#fdfaf5',
          100: '#f7f0e3',
          200: '#ede0c8',
          300: '#deccaa',
        },

        // ─── Cores semânticas (use essas no projeto) ───────────────

        // Fundos
        'bg-base':       '#0a0804',   // fundo principal da página
        'bg-surface':    '#1a1812',   // cards, seções elevadas
        'bg-subtle':     '#242118',   // hover states, separadores
        'bg-overlay':    '#2c1a0e',   // modais, tooltips

        // Textos
        'text-primary':  '#fdfaf5',   // títulos e textos principais
        'text-secondary':'#deccaa',   // textos de suporte / descrições
        'text-muted':    '#9a6040',   // textos desabilitados / placeholders
        'text-inverse':  '#0a0804',   // texto sobre fundos claros/dourados

        // Marca / Destaque
        'brand':         '#d4a017',   // cor principal da marca (dourado)
        'brand-light':   '#f5cc55',   // hover do brand
        'brand-dark':    '#8a6200',   // pressed / active do brand

        // Bordas
        'border-default':'#3d2512',   // bordas padrão
        'border-subtle': '#242118',   // bordas sutis
        'border-brand':  '#d4a017',   // bordas de destaque/foco

        // Ações / Botões
        'action-primary':     '#d4a017',  // botão primário (fundo)
        'action-primary-text':'#0a0804',  // texto do botão primário
        'action-primary-hover':'#f5cc55', // hover do botão primário
        'action-secondary':    '#3d2512', // botão secundário (fundo)
        'action-secondary-text':'#fdfaf5',// texto do botão secundário

        // Feedback
        'success': '#4a7c59',
        'warning': '#c87941',
        'error':   '#9b3535',
      },

      fontFamily: {
        sans:  ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],  // para títulos elegantes
      },

      borderRadius: {
        'card': '1rem',
        'btn':  '0.5rem',
      },

      boxShadow: {
        'gold-sm': '0 0 12px rgba(212, 160, 23, 0.2)',
        'gold-md': '0 0 24px rgba(212, 160, 23, 0.35)',
        'gold-lg': '0 0 48px rgba(212, 160, 23, 0.45)',
      },
    },
  },
  plugins: [],
}
