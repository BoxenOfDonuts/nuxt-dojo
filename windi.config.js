import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    // accepts globs and file paths relative to project root
    include: ["**/*.{vue,html,jsx,tsx,css}"],
    exclude: ["node_modules", ".git"],
  },
});
