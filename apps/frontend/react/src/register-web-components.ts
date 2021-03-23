// Dependencies
import { HTMLAttributes } from 'react';

// Utils
import * as fromPuzzl from 'puzzl-components/dist/loader';
import * as fromWebComponents from 'web-components/dist/loader';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
  };
} ;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact<fromPuzzl.JSX.IntrinsicElements>, StencilToReact<fromWebComponents.JSX.IntrinsicElements> {}
  }
}

fromPuzzl.defineCustomElements(window);
fromWebComponents.defineCustomElements(window);
