// Dependencies
import React from 'react';

// Utils
import { useAuth } from '~/hooks/auth';

// Assets
import { Content } from './hello-pages.styles';

const HelloPages: React.FC = () => {
  const { data } = useAuth();

  return (
    <Content>
      <div>Welcome, </div>
      <h2>{data.profile?.fullname}</h2>
    </Content>
  );
};

export default HelloPages;
