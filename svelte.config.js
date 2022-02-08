import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import path from "path";
import sass from "sass";
import highlight from "highlight.js";
import markdown from "vite-plugin-markdown";
import markdownIt from "markdown-it";
import markdownItEmoji from "markdown-it-emoji";

const WORKING_DIR = process.cwd();

const SASS_DATA = (sassPath) => `@use "sass:math";
@import "${sassPath}/variables";
@import "${sassPath}/helpers";
@import "${sassPath}/mixins";`;

const SASS_PATH = path
  .resolve(WORKING_DIR, "src", "styles")
  .replace(/\\/g, "/");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $app: path.resolve(WORKING_DIR, "src"),
        },
      },
      plugins: [
        markdown.plugin({
          mode: ["html", "toc"],
          markdownIt: markdownIt({
            html: true,
            xhtmlOut: true,
            langPrefix: "language-",
            highlight: (str, lang) => {
              if (lang && highlight.getLanguage(lang)) {
                try {
                  return `<pre class="hljs"><code>${
                    highlight.highlight(str, {
                      language: lang,
                      ignoreIllegals: true,
                    }).value
                  }</code></pre>`;
                } catch (__) {
                  console.log("Nothing to catch here.");
                }
              }

              return `<pre class="hljs"><code>${markdownIt({
                html: true,
                xhtmlOut: true,
                langPrefix: "language-",
              }).utils.escapeHtml(str)}</code></pre>`;
            },
          }).use(markdownItEmoji),
        }),
      ],
    },
  },
  preprocess: preprocess({
    postcss: true,
    scss: {
      implementation: sass,
      precision: 8,
      outputStyle: "compressed",
      sourceComments: false,
      prependData: SASS_DATA(SASS_PATH),
      includePaths: ["./src/styles"],
      quietDeps: true,
    },
  }),
};

export default config;
