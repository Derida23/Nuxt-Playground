export default defineAppConfig({
  ui: {
    primary: 'main',
    gray: 'cool',
    icons: 'mdi',
    colors: ['grey', 'success', 'critical', 'warning', 'interactive', 'primary'],
    // Input Preset
    input: {
      rounded: 'rounded-lg',
      base: [
        'mt-1',
        'focus:ring-1',

        // disabled
        'disabled:bg-zinc-100',
        'disabled:ring-zinc-100',
      ].join(' '),
      default: {
        size: 'xl',
      },
      placeholder: ['placeholder-neutral-100/20'].join(' '),
      color: {
        white: {
          outline: [
            'ring-1',
            'ring-neutralVariant-800',

            // focus
            'focus:ring-1',
            'focus:ring-neutralVariant-500',
          ].join(' '),
        },
      },
      variant: {
        outline: 'focus:ring-1',
      },
      icon: {
        base: [
          'flex-shrink-0',
          'text-{color}-600',
        ].join(' '),
      },
    },

    // Button Preset
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'xl',
      },
      font: 'font-semibold',
      size: {
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-base',
      },
      padding: {
        'sm': 'px-3 py-2',
        'md': 'px-3 py-2.5',
        'lg': 'px-4 py-2.5',
        'xl': 'px-4.5 py-3',
        '2xl': 'px-5 py-4',
      },
      variant: {
        solid: [
          'bg-{color}-400',
          'hover:bg-{color}-400',

          // hover
          'hover:shadow-custom',

          // focus
          'focus-visible: bg-{color}-500',
        ].join(' '),
      },
    },

  },
})
