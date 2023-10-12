import type { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

const colors = {
  main: {
    DEFAULT: '#E42E2C',
    50: '#FECDCA',
    100: '#FFE3E8',
    500: '#E42E2C',
    600: '#B22217',
  },
  black: {
    50: '#CED0D1',
    100: '#B6B8BA',
    200: '#9EA0A3',
    300: '#85898C',
    400: '#6D7175',
    500: '#5B5E61',
    600: '#494B4E',
    700: '#36383A',
    800: '#242627',
    900: '#161717',
  },
  grey: {
    100: '#FAFAFA',
    200: '#F5F6F6',
    300: '#F0F1F1',
    400: '#ECECEC',
    500: '#E7E8E8',
    600: '#E2E3E3',
    700: '#D2D5D8',
  },
  success: {
    50: '#F6FEF9',
    100: '#ECFDF3',
    200: '#D1FADF',
    300: '#A6F4C5',
    400: '#6CE9A6',
    500: '#32D583',
    600: '#12B76A',
    700: '#039855',
    800: '#027948',
    900: '#05603A',
    1000: '#054F31',
  },
  critical: {
    50: '#FFFBFA',
    100: '#FEF3F2',
    200: '#FEE4E2',
    300: '#FECDCA',
    400: '#FDA29B',
    500: '#F97066',
    600: '#F04438',
    700: '#D92D20',
    800: '#B32318',
    900: '#912018',
    1000: '#7A271A',
  },
  warning: {
    50: '#FFFCF5',
    100: '#FFFAEB',
    200: '#FEF0C7',
    300: '#FEDF89',
    400: '#FEC84B',
    500: '#FDB022',
    600: '#F79009',
    700: '#DC6803',
    800: '#B54708',
    900: '#93370D',
    1000: '#792E0D',
  },
  interactive: {
    50: '#F5FAFF',
    100: '#EFF8FF',
    200: '#D1E9FF',
    300: '#B2DDFF',
    400: '#84CAFF',
    500: '#53B1FD',
    600: '#2E90FA',
    700: '#1570EF',
    800: '#175CD3',
    900: '#1849A9',
    1000: '#194185',
  },
} as const

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // default font
    },
    extend: {
      backgroundColor: {
        default: {
          DEFAULT: colors.grey[200],
          disabled: colors.grey[300],
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subdued: colors.grey[100],
          disabled: colors.grey[100],
        },
        success: {
          subdued: colors.success[100],
          DEFAULT: colors.success[600],
          darken: colors.success[700],
        },
        warning: {
          subdued: colors.warning[100],
          DEFAULT: colors.warning[600],
          darken: colors.warning[700],
        },
        critical: {
          subdued: colors.critical[100],
          DEFAULT: colors.critical[600],
          darken: colors.critical[700],
        },
        info: {
          subdued: colors.interactive[100],
          DEFAULT: colors.interactive[600],
          darken: colors.interactive[700],
        },
        dark: colors.black[900],
      },
      textColor: {
        default: colors.black[800],
        subdued: colors.black[400],
        disabled: colors.black[300],
        success: colors.success[800],
        critical: colors.critical[800],
        warning: colors.warning[800],
        interactive: colors.interactive[800],
      },
      borderColor: {
        default: colors.black[100],
        subdued: colors.grey[300],
        disabled: colors.grey[700],
        success: colors.success[700],
        warning: colors.warning[700],
        critical: colors.critical[700],
        interactive: colors.interactive[700],
      },
      ringColor: {
        default: colors.black[100],
        subdued: colors.grey[300],
        disabled: colors.grey[700],
        success: colors.success[700],
        warning: colors.warning[700],
        critical: colors.critical[700],
        interactive: colors.interactive[700],
      },
      colors,
      spacing: {
        4.5: '1.125rem',
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi']),
    }),
  ],
}
