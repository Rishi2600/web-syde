/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      colors: {
            // 🎨 Custom Colors
            // TODO: change this color name later on
            primary: "#03030F",      // blue-800
            secondary: "#FFFFFF",    // purple-600
            accent: "#26A0F8",       // amber-500
      },
      fontFamily: {
            // 🔤 Custom Fonts (you can import them in globals.css)
            sans: ['Poppins', 'sans-serif']
      },
      // Add more customizations as needed
    },
    plugins: [],
  }
}