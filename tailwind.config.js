/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', '"Segoe UI"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Google Sans Mono"', '"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // MD3 Primary
        primary:              '#1A73E8',
        'primary-hover':      '#1557AE',
        'primary-container':  '#D2E3FC',
        'on-primary':         '#FFFFFF',
        'on-primary-container': '#041E49',

        // MD3 Secondary
        secondary:            '#1967D2',
        'secondary-container':'#C5D9F9',
        'on-secondary':       '#FFFFFF',

        // MD3 Tertiary / success
        tertiary:             '#137333',
        'tertiary-container': '#CEEAD6',
        'on-tertiary':        '#FFFFFF',

        // MD3 Error
        error:                '#D93025',
        'error-container':    '#FADADD',

        // MD3 Surface hierarchy
        background:           '#FFFFFF',
        surface:              '#FFFFFF',
        'surface-dim':        '#F8F9FA',
        'surface-container':  '#F1F3F4',
        'surface-container-high': '#E8EAED',
        'surface-variant':    '#F1F3F4',

        // MD3 On-surface
        'on-surface':         '#202124',
        'on-surface-variant': '#5F6368',
        'on-surface-dim':     '#80868B',

        // MD3 Outline
        outline:              '#DADCE0',
        'outline-variant':    '#E8EAED',

        // Tonal spot colors
        'blue-container':     '#E8F0FE',
        'green-container':    '#E6F4EA',
        'amber-container':    '#FEF7E0',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(0,0,0,0.10), 0 1px 3px 1px rgba(0,0,0,0.06)',
        'elevation-2': '0 1px 2px rgba(0,0,0,0.10), 0 2px 6px 2px rgba(0,0,0,0.08)',
        'elevation-3': '0 4px 8px 3px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)',
        'elevation-4': '0 6px 10px 4px rgba(0,0,0,0.10), 0 2px 3px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xs:   '4px',
        sm:   '8px',
        md:   '12px',
        lg:   '16px',
        xl:   '24px',
        full: '9999px',
      },
      maxWidth: {
        site: '1200px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
