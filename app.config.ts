export default defineAppConfig({
  ui: {
    primary: 'tourid',
    gray: 'cool',
    icons: ["mdi", "simple-icons"],
    input: {
      base: "mt-1 focus:ring-1",
      default: {
        size: "xl",
      },
      placeholder: "placeholder-gray-300 ",
      color: {
        white: {
          outline: "focus:ring-1 focus:ring-gray-500 ",
        },
      },
      variant: {
        outline: "focus:ring-1",
      },
      icon: {
        base: "flex-shrink-0 text-gray-700 ",
      },
    },
    button: {
      base: "hover:opacity-90",
      default: {
        size: "xl",
        color: "tourid",
      },
    },
  },
});
