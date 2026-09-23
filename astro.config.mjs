// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://jingpeng7527.github.io",
  markdown: {
    shikiConfig: {
      // dark variant is switched on in global.css
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
