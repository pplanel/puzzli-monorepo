import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { sass } from '@stencil/sass';

import * as fs from 'graceful-fs';

async function generateCustomElementsJson(docsData: JsonDocs) {
  const jsonData = {
    version: 1.2,
    tags: docsData.components.map((component) => ({
      name: component.tag,
      path: component.filePath,
      description: component.docs,

      attributes: component.props
        .filter((prop) => prop.attr)
        .map((prop) => ({
          name: prop.attr,
          type: prop.type,
          description: prop.docs,
          defaultValue: prop.default,
          required: prop.required,
        })),

      events: component.events.map((event) => ({
        name: event.event,
        description: event.docs,
      })),

      methods: component.methods.map((method) => ({
        name: method.name,
        description: method.docs,
        signature: method.signature,
      })),

      slots: component.slots.map((slot) => ({
        name: slot.name,
        description: slot.docs,
      })),

      cssProperties: component.styles
        .filter((style) => style.annotation === 'prop')
        .map((style) => ({
          name: style.name,
          description: style.docs,
        })),

      cssParts: component.parts.map((part) => ({
        name: part.name,
        description: part.docs,
      })),
    })),
  };

  await fs.writeFile(
    './custom-elements.json',
    JSON.stringify(jsonData, null, 2), 
    (err) => {}
  );
}

export const config: Config = {
  namespace: 'web-components',
  globalStyle: './src/globals/styles/global.scss',
  plugins: [
    sass(
      {
        injectGlobalPaths: [
          './src/globals/styles/variables.scss',
        ]
      }
    )
  ],
  outputTargets: [
    {
      type: 'dist',
      copy: [
        {
          src: '**/*.theme.css',
          dest: '../themes/',

        },
        {
          src: '**/*.i18n.*.json',
          dest: '../locale',

        },
        {
          src: "assets/*.*",
          dest: "../assets"
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    { 
      type: 'docs-custom',
      generator: generateCustomElementsJson
    }
  ],
};
