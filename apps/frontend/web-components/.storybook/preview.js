import { defineCustomElements } from "../dist/loader";
defineCustomElements();

import "../dist/themes/app-enem.css";
import "../dist/themes/app-militares.css";

import { defaultViewports } from "../src/global/types/Breakpoints";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "app-enem",
    list: [
      { name: "app-enem", class: "app-enem", color: "#df1d3d" },
      { name: "app-militares", class: "app-militares", color: "#0f6e42" },
    ],
  },
  viewport: { viewports: defaultViewports },
  options: {
    storySort: {
      order: [
        "Getting Started",
        "Theming",
        ["Intro", "Defs", "Functions", "Mixins"],
        "Design Tokens",
        ["Intro", "Breakpoints"],
        "Global",
        "Components",
        "Composites",
        "Tests",
      ],
    },
  },
};

// force full reload to not reregister web components
// const req = require.context("../src", true, /\.src\.(tsx|js|mdx)$/);
// configure(req, module);

// if (module.hot) {
//   module.hot.accept(req.id, () => {
//     const currentLocationHref = window.location.href;

//     window.history.pushState(null, null, currentLocationHref);
//     window.location.reload();

//     setTimeout(() => window.location.reload());
//   });
// }
