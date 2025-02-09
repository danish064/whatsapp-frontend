/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(250 250 250)",
        background: "rgb(30 30 30)",
        "ui-foreground": "rgb(182 182 182)",
        "ui-background": "rgb(36 38 38)",
        "ui-focus": "rgb(58 59 59)",
        "ui-hover": "rgb(50 52 52)",
        "chat-focus": "rgb(53	53 53)",
        "chat-hover": "rgb(45 45 45)",
        "chat-send": "rgb(21 77 56)",
        "chat-recieved": "rgb(36 38 38)",
        "chat-background": "rgb(22 23 23)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};
