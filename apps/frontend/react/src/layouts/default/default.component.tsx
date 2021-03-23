// Dependencies
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';

// Utils
import { useAuth } from '~/hooks/auth';
import navigationOptions from '~/utils/mocks/navigation-options';

// Components
import Button from '~/components/button';

// Assets
import { Container, Item } from './default.styles';

const Default: React.FC = ({ children }) => {
  const { signOut } = useAuth();
  const history = useHistory();
  const { pathname } = useLocation();

  const handleNavigation = (path: string) => {
    history.push(`/${path}`);
  };

  return (
    <Container>
      <div className="navbar">
        <div>
          {navigationOptions.map((option) => (
            <Item
              selected={option.slug === pathname.substr(1)}
              onClick={() => {
                handleNavigation(option.slug);
              }}
            >
              {option.text}
            </Item>
          ))}
        </div>

        <Button
          text="LogOut"
          type="button"
          handleClick={() => {
            signOut();
            history.push('/');
          }}
        />
      </div>
      <div className="page">{children}</div>
    </Container>
  );
};

export default Default;
