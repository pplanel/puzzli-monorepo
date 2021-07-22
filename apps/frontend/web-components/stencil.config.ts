import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "app-components",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
      dir: "dist/stencil",
      copy: [
        {
          src: "assets/fonts",
          dest: "../../themes/fonts",
        },
      ],
    },
    {
      type: "dist-custom-elements-bundle",
    },
    {
      type: "docs-readme",
    },
    reactOutputTarget({
      componentCorePackage: "web-components",
      proxiesFile: `../react-front/web-components/src/components.ts`,
      loaderDir: "dist/loader",
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/css/core.scss"],
    }),
  ],
};
