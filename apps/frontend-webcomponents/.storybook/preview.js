// import { configure } from '@storybook/react';
// import buildStencilStories from './stories/automatedStories';

// const loader = require('../loader/index.cjs');


// const COLLECTIONS = [{
//     name: 'My Components',
//     componentsCtx: require.context('../dist/collection', true, /\/components\/([^/]+)\/\1\.js$/),
//     storiesCtx: require.context('../src', true, /\.stories\.tsx$/),
// }, ];

// function loadStories() {
//     loader.defineCustomElements(window);
//     COLLECTIONS.forEach(({ name, componentsCtx, storiesCtx }) => {
//         buildStencilStories(name, componentsCtx, storiesCtx);
//     });
// }

// configure(loadStories, module);

/* global window */

import {
    configure,
    addParameters,
    setCustomElements,
} from '@storybook/web-components';

import customElements from '../custom-elements.json';

setCustomElements(customElements);

addParameters({
    docs: {
        inlineStories: false,
        iframeHeight: '200px',
    },
});

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context('../src', true, /\.src\.(tsx|js|mdx)$/);

configure(req, module);

if (module.hot) {
    module.hot.accept(req.id, () => {
        const currentLocationHref = window.location.href;
        
        window.history.pushState(null, null, currentLocationHref);
        window.location.reload();

        setTimeout(() => window.location.reload());
    });
}
