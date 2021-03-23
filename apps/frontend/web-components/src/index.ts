export { Components, JSX } from './components';

import { Annotations, Args as DefaultArgs, BaseStory } from '@storybook/addons';
import { StoryFnHtmlReturnType } from '@storybook/web-components/dist/client/preview/types';

export type Story<Args = DefaultArgs> = BaseStory<Args, StoryFnHtmlReturnType> & Annotations<Args, StoryFnHtmlReturnType>;

import { defineCustomElements } from 'puzzl-components/dist/loader';

defineCustomElements();

declare const OMG;