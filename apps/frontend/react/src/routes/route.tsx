// Dependencies
import React, { Suspense } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';

// Components
import Default from '~/layouts/default';

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate,
  component: Component,
  ...rest
}) => {
  const Render: (props: RouteComponentProps<any>) => React.ReactNode = () => (
    <>
      {isPrivate ? (
        <Default>
          <Suspense fallback={<div />}>
            <Component />
          </Suspense>
        </Default>
      ) : (
        <Suspense fallback={<div />}>
          <Component />
        </Suspense>
      )}
    </>
  );

  return (
    // eslint-disable-next-line
    <ReactDOMRoute {...rest} render={Render} />
  );
};

export default Route;
